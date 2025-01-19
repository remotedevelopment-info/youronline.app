<script>
	import { browser } from '$app/environment';
    let { next } = $props();
	let hasScrolled = $state(false);

	function scrollToNext() {
		const nextSection = document.querySelector('section#' + next);
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	}
	if (browser) {
		window.addEventListener('scroll', () => {
			hasScrolled = window.scrollY > 50;
		});
	}
</script>

<button
	class="relative bottom-8 left-1/2 -translate-x-1/2 text-black dark:text-white opacity-80
       transition-all duration-300 hover:opacity-100
       {hasScrolled ? 'opacity-0' : ''}"
	on:click={scrollToNext}
	aria-label="Scroll to next section"
>
	<div class="animate-bounce">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</div>
</button>
