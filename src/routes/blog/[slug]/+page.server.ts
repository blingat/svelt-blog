import { readFile } from 'fs/promises';
import { join } from 'path';
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';

export async function load({ params }) {
  try {
    const { slug } = params;
    const postPath = join(process.cwd(), 'src/routes/blog/post', slug, 'index.md');
    const fileContents = await readFile(postPath, 'utf-8');
    const { data: meta, content } = matter(fileContents);

    return {
      meta: {
        ...meta,
        slug
      },
      content
    };
  } catch (err) {
    console.error('Error loading blog post:', err);
    throw error(404, '블로그 포스트를 찾을 수 없습니다.');
  }
} 