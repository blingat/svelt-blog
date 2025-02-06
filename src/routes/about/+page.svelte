<!-- src/routes/about/+page.svelte -->
<div class="container py-8 md:py-12 lg:py-24">
  <div class="mx-auto flex max-w-[980px] flex-col items-start gap-8">
    <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
      About Me
    </h1>
    <div class="flex flex-col gap-4 text-lg text-muted-foreground">
      <p>
        Hello! I'm a passionate developer and writer who loves to share knowledge and experiences through this blog.
      </p>
      <p>
        This blog is built with modern web technologies including:
      </p>
      <ul class="ml-6 list-disc">
        <li>SvelteKit - A powerful framework for building web applications</li>
        <li>TailwindCSS - A utility-first CSS framework</li>
        <li>shadcn-svelte - Beautiful and accessible UI components</li>
      </ul>
      <p class="mt-4">
        Feel free to connect with me on social media or check out my other projects:
      </p>
      <div class="flex gap-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Twitter
        </a>
      </div>
    </div>
  </div>
</div> 