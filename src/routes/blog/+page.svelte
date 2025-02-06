<!-- src/routes/blog/+page.svelte -->
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
  <div class="mb-8">
    <h1 class="text-3xl font-bold tracking-tight">글목록</h1>
    <p class="mt-2 text-lg text-gray-600">
      생각과 이야기, 아이디어를 공유합니다.
    </p>
  </div>

  <div class="grid gap-8">
    {#each data.posts as post}
      <article class="group relative overflow-hidden rounded-lg border bg-white p-6 transition-all hover:border-primary/30">
        <a href="/blog/{post.slug}" class="block">
          <div class="flex flex-col gap-4 md:flex-row md:items-start">
            {#if post.thumbnail}
              <div class="relative aspect-[1.91/1] w-full overflow-hidden rounded-lg bg-gray-100 md:w-64">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            {/if}
            <div class="flex-1">
              <div class="flex items-center gap-3 text-sm text-gray-600">
                <time datetime={post.createdAt} class="font-medium">
                  {new Date(post.createdAt).toLocaleDateString('ko-KR')}
                </time>
                {#if post.group}
                  <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium">
                    {post.group}
                  </span>
                {/if}
              </div>
              <h2 class="mt-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-primary">
                {post.title}
              </h2>
              {#if post.description}
                <p class="mt-2 text-gray-600">
                  {post.description}
                </p>
              {/if}
              {#if post.tags && post.tags.length > 0}
                <div class="mt-4 flex flex-wrap gap-2">
                  {#each post.tags as tag}
                    <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">#{tag}</span>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </a>
      </article>
    {/each}
  </div>
</div> 