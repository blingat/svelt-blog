import { json } from '@sveltejs/kit';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import type { RequestHandler } from './$types';

interface PostData {
  title: string;
  description: string;
  group: string;
  tags: string[];
  content: string;
  createdAt: string;
  author: string[];
  slug: string;
}

export const POST: RequestHandler = async ({ request }) => {
  try {
    const postData: PostData = await request.json();
    const postsPath = join(process.cwd(), 'src/routes/blog/post', postData.slug);
    
    // 디렉토리 생성
    await mkdir(postsPath, { recursive: true });

    // 마크다운 파일 생성
    const markdown = `---
title: ${postData.title}
createdAt: ${postData.createdAt}
group: ${postData.group}
author: 
${postData.author.map(a => `  - ${a}`).join('\n')}
tags: 
${postData.tags.map(t => `  - ${t}`).join('\n')}
description: ${postData.description}
---

${postData.content}`;

    await writeFile(join(postsPath, 'index.md'), markdown, 'utf-8');

    return json({ success: true, slug: postData.slug });
  } catch (error) {
    console.error('Error saving post:', error);
    return json({ error: 'Failed to save post' }, { status: 500 });
  }
}; 