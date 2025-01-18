<script>
	import { fade } from 'svelte/transition';
    import AnimatedScroll from '$lib/Components/AnimatedScroll.svelte';
	/** @typedef {Object} HeroProps
	 * @property {string} image - URL of the background/side image
	 * @property {string} h1 - Main heading
	 * @property {string} h2 - Secondary heading
	 * @property {string} [slogan] - Optional slogan text
     * @property {string} [content] - Optional content text
	 * @property {string} [slotted] - Slotted content
	 * @property {'full' | 'split'} [layout='full'] - Layout style
	 * @property {'left' | 'center' | 'right'} [textAlign='center'] - Text alignment for full layout
	 */
	/** @type {HeroProps} */
	let {
		image,
		h1,
		h2,
		slogan = '',
        content = '',
		layout = 'full',
		textAlign = 'center',
		slotted = ''
	} = $props();
</script>

<article
	class="relative flex min-h-[calc(100vh-72px)] items-center
           {layout === 'split' ? 'overflow-hidden bg-gray-50 dark:bg-gray-900' : ''}"
	class:bg-cover={layout === 'full'}
	class:bg-center={layout === 'full'}
	style={layout === 'full' ? `background-image: url(${image})` : ''}
>

	{#if layout === 'full'}
		<!-- Darker overlay for better contrast in both modes -->
		<div class="absolute inset-0 bg-black/50"></div>
	{/if}

	<div
		class="container mx-auto px-4 {layout === 'split'
			? 'grid items-center gap-4 md:grid-cols-2'
			: ''}"
	>
		<!-- Text Content -->
		<div
			class="{layout === 'full' ? `text-${textAlign} text-white` : 'pr-8'} 
                   {layout === 'split' ? 'order-1 md:order-none' : ''}"
		>
			<h1
				class="mb-4 text-4xl font-bold md:text-6xl
                       {layout === 'split' ? 'text-gray-900 dark:text-white' : ''}"
				transition:fade
			>
				{h1}
			</h1>

			<h2
				class="mb-12 text-2xl md:text-3xl
                       {layout === 'split' ? 'text-gray-700 dark:text-gray-300' : ''}"
				transition:fade={{ delay: 200 }}
			>
				{h2}
			</h2>

			{#if slogan}
				<p
					class="mb-8 text-xl md:text-2xl
                           {layout === 'split' ? 'text-gray-600 dark:text-gray-400' : ''}"
					transition:fade={{ delay: 400 }}
				>
					{slogan}
				</p>
                <p class="mb-4">{content}</p>
			{/if}
			<p>
				{slotted}
			</p>
		</div>

		<!-- Image for split layout -->
		{#if layout === 'split'}
			<div class="relative order-none md:order-1">
				<img
					src={image}
					alt="Hero"
					class="h-auto w-full rounded-lg shadow-xl dark:shadow-gray-700/30"
					transition:fade
				/>
			</div>
		{/if}
	</div>
</article>
