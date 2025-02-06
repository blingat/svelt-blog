<script lang="ts">
	import '../app.css';
</script>

<div class="min-h-screen bg-background font-sans antialiased">
	<div class="relative flex min-h-screen flex-col">
		<header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl">
			<div class="container flex h-16 items-center justify-between">
				<div class="flex items-center gap-6">
					<a href="/" class="flex items-center gap-2">
						<span class="text-lg font-bold">개발 블로그</span>
					</a>
					<nav class="hidden md:flex">
						<ul class="flex items-center gap-1">
							<li>
								<a href="/blog" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100">글목록</a>
							</li>
							<li>
								<a href="/write" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100">글쓰기</a>
							</li>
							<li>
								<a href="/about" class="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-gray-100">소개</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="flex items-center gap-4">
					<button class="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
					</button>
					<div class="flex items-center gap-2">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</a>
						<a href="/rss.xml" target="_blank" rel="noopener noreferrer" class="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</header>
		<main class="flex-1">
			<slot />
		</main>
		<footer class="border-t bg-gray-50">
			<div class="container py-8">
				<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
					<p class="text-center text-sm text-gray-600 md:text-left">
						© 2024 개발 블로그. Built with
						<a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer" class="font-medium text-primary hover:underline">SvelteKit</a>
						and
						<a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="font-medium text-primary hover:underline">Tailwind CSS</a>.
					</p>
					<div class="flex items-center gap-4">
						<a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
							<span class="sr-only">GitHub</span>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>
