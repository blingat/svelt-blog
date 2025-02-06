import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

interface PostMeta {
  title: string;
  createdAt: string;
  updatedAt?: string;
  group: string;
  author: string[];
  tags: string[];
  description: string;
  slug: string;
  thumbnail?: string | null;
}

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
            ...(data as Omit<PostMeta, 'slug' | 'thumbnail'>),
            slug: folder.name,
            thumbnail: await getThumbnail(postsPath, folder.name)
          };
        })
    );

    return {
      posts: posts
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    };
  } catch (err) {
    console.error('Error loading blog posts:', err);
    return { posts: [] };
  }
}

async function getThumbnail(postsPath: string, folderName: string) {
  try {
    const thumbnailPath = join(postsPath, folderName, 'thumbnail.png');
    await readFile(thumbnailPath);
    return `/blog/post/${folderName}/thumbnail.png`;
  } catch {
    return null;
  }
} 