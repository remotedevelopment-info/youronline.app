<!-- src/lib/components/TestimonialCard.svelte -->
<script>
	/** @typedef {Object} TestimonialProps
	 * @property {string} name - Reviewer's name
	 * @property {string} company - Company name
	 * @property {string} headline - Review headline/lead
	 * @property {string} review - Full review text
	 * @property {number} rating - Star rating (1-5)
	 * @property {string} [image] - Optional reviewer image
	 */

	/** @type {TestimonialProps} */
	let { name, company, headline, review, rating, image } = $props();

	/** @type {string} */
	const starSvg = `
        <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
    `;
</script>

{#if rating}
	<article
		class="transform rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
	>
		<div class="mb-4 flex items-center gap-4">
			{#if image}
				<img src={image} alt={name} class="h-12 w-12 rounded-full object-cover" />
			{/if}
			<div>
				<h3 class="font-semibold text-gray-900 dark:text-white">{name}</h3>
				<p class="text-sm text-gray-600 dark:text-gray-400">{company}</p>
			</div>
		</div>

		<div class="mb-3 flex text-yellow-400" aria-label="{rating} out of 5 stars">
			{#each Array(5) as _, i}
				<div class={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
					{@html starSvg}
				</div>
			{/each}
		</div>
		<h4 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
			{headline}
		</h4>

		<p class="text-gray-600 dark:text-gray-400">
			{review}
		</p>
	</article>
{/if}
