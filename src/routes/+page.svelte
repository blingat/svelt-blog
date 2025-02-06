<script lang="ts">
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

  interface PageData {
    posts: PostMeta[];
  }

  export let data: PageData;
</script>

<div class="container py-8">
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.posts as post}
      <article class="group relative overflow-hidden rounded-lg border bg-white transition-all hover:border-primary/30">
        <a href="/blog/{post.slug}" class="block">
          <div class="relative aspect-[1.91/1] overflow-hidden bg-gray-100">
            {#if post.thumbnail}
              <img
                src={post.thumbnail}
                alt={post.title}
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            {:else}
              <div class="flex h-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            {/if}
            {#if post.group}
              <span class="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium backdrop-blur-md">
                {post.group}
              </span>
            {/if}
          </div>
          <div class="p-4">
            <h2 class="mb-2 line-clamp-2 text-lg font-bold leading-tight tracking-tight text-gray-900 group-hover:text-primary">
              {post.title}
            </h2>
            {#if post.description}
              <p class="mb-4 line-clamp-2 text-sm text-gray-600">
                {post.description}
              </p>
            {/if}
            <div class="flex flex-wrap items-center gap-3 text-xs text-gray-600">
              <time datetime={post.createdAt} class="font-medium">
                {new Date(post.createdAt).toLocaleDateString('ko-KR')}
              </time>
              {#if post.tags && post.tags.length > 0}
                <div class="flex flex-wrap gap-1">
                  {#each post.tags.slice(0, 2) as tag}
                    <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">#{tag}</span>
                  {/each}
                  {#if post.tags.length > 2}
                    <span class="text-xs font-medium text-gray-500">+{post.tags.length - 2}</span>
                  {/if}
                </div>
              {/if}
            </div>
          </div>
        </a>
      </article>
    {/each}
  </div>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
