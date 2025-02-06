<!-- src/routes/write/+page.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { Editor } from '@tiptap/core';
  import StarterKit from '@tiptap/starter-kit';
  import Image from '@tiptap/extension-image';
  import Link from '@tiptap/extension-link';
  import Placeholder from '@tiptap/extension-placeholder';
  import slugify from 'slugify';

  let title = '';
  let description = '';
  let group = '';
  let tags = '';
  let editor: Editor;

  onMount(() => {
    editor = new Editor({
      element: document.querySelector('#editor')!,
      extensions: [
        StarterKit,
        Image,
        Link,
        Placeholder.configure({
          placeholder: '내용을 입력하세요...'
        })
      ],
      content: '',
      editorProps: {
        attributes: {
          class: 'prose prose-slate focus:outline-none max-w-none'
        }
      }
    });

    return () => {
      editor.destroy();
    };
  });

  async function handleSubmit() {
    if (!title || !description || !group || !editor?.getHTML()) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const postData = {
      title,
      description,
      group,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      content: editor.getHTML(),
      createdAt: new Date().toISOString().split('T')[0],
      author: ['admin'], // 실제 인증 시스템에 맞게 수정 필요
      slug: slugify(title, { lower: true, strict: true })
    };

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) throw new Error('Failed to save post');

      window.location.href = `/blog/${postData.slug}`;
    } catch (error) {
      console.error('Error saving post:', error);
      alert('포스트 저장 중 오류가 발생했습니다.');
    }
  }
</script>

<div class="container max-w-[980px] py-8">
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div class="space-y-4">
      <input
        type="text"
        bind:value={title}
        placeholder="제목"
        class="w-full rounded-lg border border-input bg-background px-4 py-3 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <textarea
        bind:value={description}
        placeholder="설명"
        rows="2"
        class="w-full rounded-lg border border-input bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring"
      ></textarea>
      <div class="flex gap-4">
        <input
          type="text"
          bind:value={group}
          placeholder="카테고리"
          class="flex-1 rounded-lg border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <input
          type="text"
          bind:value={tags}
          placeholder="태그 (쉼표로 구분)"
          class="flex-1 rounded-lg border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>

    <div class="min-h-[500px] rounded-lg border border-input bg-background p-4">
      <div id="editor" class="min-h-[500px]"></div>
    </div>

    <div class="flex justify-end gap-4">
      <a
        href="/blog"
        class="rounded-lg border border-input px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        취소
      </a>
      <button
        type="submit"
        class="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        저장
      </button>
    </div>
  </form>
</div>

<style>
  :global(.ProseMirror) {
    min-height: 500px;
  }
  :global(.ProseMirror p.is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
  }
</style> 