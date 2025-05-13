<script>
	/** @typedef {import('./PricingCard.svelte').PricingPlans} PricingPlans */
	/** @typedef {Object} GridProps
	 * @property {string} [title='Pricing Plans']
	 * @property {string} [subtitle='Choose the plan that fits your needs']
	 * @property {PricingProps[]} plans
	 */

	import PricingCard from './PricingCard.svelte';
	/** @type {GridProps} */
	let {
		title = 'Pricing Plans',
		subtitle = 'Choose the plan that fits your needs',
		plans
	} = $props();
</script>

<div class="bg-gray-50 dark:bg-gray-900 py-12">
	<div class="mx-auto px-4 container">
		<div class="mb-12 text-center">
			<h2 class="mb-4 font-bold text-gray-900 dark:text-white text-3xl md:text-4xl">
				{title}
			</h2>
			<p class="mx-auto max-w-2xl text-gray-600 dark:text-gray-400 text-xl">
				{subtitle}
			</p>
		</div>

		<div class="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl">
			{#each plans as plan}
				<PricingCard {...plan} />
			{/each}
		</div>
	</div>
	<div class="px-12 md:px-16 lg:px-24">
		<h3>Simple terms</h3>
		<p>
			Prices are charged in $US. UK clients may be billed in UK£. VAT is not included in the price.
			Subscriptions are paid in advance and may be cancelled at any time preventing next payment.
			FREE Website is published on a YourOnline.app subdomain. Updates are published for your
			approval and updates can be reverted. <a href="/articles/terms-conditions"
				>Terms and Conditions</a
			>.
		</p>
		<p>
			Enterprise development is a productised service subscription. You pay for one month of
			development by our small team of expert level developers. We deliver working staging site of
			your full stack application according to your priorities. On your approval, the staging site
			is published on your domain.
		</p>
		<p>You may revert to hosting only and restart development at any time.</p>
	</div>
</div>
<style>
	p {
		margin-bottom: 1rem;
	}
</style>
