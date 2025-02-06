<!-- src/routes/blog/[slug]/+page.svelte -->
<script lang="ts">
  import { marked } from 'marked';

  interface PostMeta {
    title: string;
    createdAt: string;
    updatedAt?: string;
    group: string;
    author: string[];
    tags: string[];
    description: string;
    slug: string;
  }

  interface PageData {
    meta: PostMeta;
    content: string;
  }

  export let data: PageData;

  $: content = marked(data.content);
</script>

<div class="container max-w-[980px] py-8 md:py-12">
  <article class="prose prose-slate mx-auto dark:prose-invert">
    <div class="mb-8">
      <h1 class="mb-4 text-4xl font-bold tracking-tight">{data.meta.title}</h1>
      <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div class="flex items-center gap-2">
          <time datetime={data.meta.createdAt}>
            {new Date(data.meta.createdAt).toLocaleDateString('ko-KR')}
          </time>
          {#if data.meta.updatedAt}
            <span class="text-muted-foreground/60">(수정: {new Date(data.meta.updatedAt).toLocaleDateString('ko-KR')})</span>
          {/if}
        </div>
        <span class="inline-block rounded-full bg-secondary/50 px-3 py-1">{data.meta.group}</span>
        {#if data.meta.tags && data.meta.tags.length > 0}
          <div class="flex flex-wrap gap-2">
            {#each data.meta.tags as tag}
              <span class="rounded-full bg-secondary/30 px-2 py-1 text-xs">#{tag}</span>
            {/each}
          </div>
        {/if}
      </div>
      {#if data.meta.description}
        <p class="mt-4 text-lg text-muted-foreground">
          {data.meta.description}
        </p>
      {/if}
    </div>
    <div class="markdown-content">
      {@html content}
    </div>
  </article>
</div>

<style lang="postcss">
  :global(.prose) {
    max-width: none;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
  }
  :global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 2em;
    margin-bottom: 1em;
  }
  :global(.prose h2) {
    font-size: 1.75em;
    border-bottom: 1px solid hsl(var(--border));
    padding-bottom: 0.3em;
  }
  :global(.prose h3) {
    font-size: 1.5em;
  }
  :global(.prose p) {
    margin: 1.25em 0;
    line-height: 1.7;
  }
  :global(.prose pre) {
    background-color: hsl(var(--secondary));
    color: hsl(var(--foreground));
    padding: 1em;
    border-radius: 0.5em;
    overflow-x: auto;
    margin: 1.5em 0;
  }
  :global(.prose code) {
    color: #eb4b98;
    background-color: hsl(var(--secondary));
    padding: 0.2em 0.4em;
    border-radius: 0.25em;
    font-size: 0.875em;
  }
  :global(.prose pre code) {
    color: inherit;
    background-color: transparent;
    padding: 0;
  }
  :global(.prose img) {
    border-radius: 0.5em;
    margin: 2em 0;
  }
  :global(.prose blockquote) {
    border-left: 4px solid hsl(var(--border));
    padding-left: 1em;
    color: hsl(var(--muted-foreground));
  }
  :global(.prose ul, .prose ol) {
    padding-left: 1.5em;
    margin: 1.25em 0;
  }
  :global(.prose li) {
    margin: 0.5em 0;
  }
  :global(.prose hr) {
    border: 0;
    border-top: 1px solid hsl(var(--border));
    margin: 2em 0;
  }
  :global(.markdown-content) {
    font-size: 1.125rem;
  }
</style> 