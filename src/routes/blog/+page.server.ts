import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';

export async function load() {
  try {
    const postsPath = join(process.cwd(), 'src/routes/blog/post');
    const folders = await readdir(postsPath, { withFileTypes: true });
    
    const posts = await Promise.all(
      folders
        .filter(dirent => dirent.isDirectory())
        .map(async (folder) => {
          const mdPath = join(postsPath, folder.name, 'index.md');
          const fileContents = await readFile(mdPath, 'utf-8');
          const { data } = matter(fileContents);
          
          return {
            ...data,
            slug: folder.name
          };
        })
    );

    return {
      posts: posts.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    };
  } catch (err) {
    console.error('Error loading blog posts:', err);
    throw error(500, 'Could not load blog posts');
  }
} 