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

<div class="bg-gray-50 py-12 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
				{title}
			</h2>
			<p class="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
				{subtitle}
			</p>
		</div>

		<div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each plans as plan}
				<PricingCard {...plan} />
			{/each}
		</div>
	</div>
	<div class="px-12 md:px-16 lg:px-24">
        <h3>Simple terms</h3>
		<p>
			Prices are charged in $US. UK clients may be billed in UK£.  VAT is not included in the price. 
            Subscriptions are paid in advance and may be cancelled at any time preventing next payment.
            FREE Website is published on a YourOnline.app subdomain.  Updates are published 
            for your approval and updates can be reverted. <a href="/articles/terms-conditions">Terms and Conditions</a>.
		</p>
        <h3>A low cost way to develop your website</h3>
		<p>We develop your website for FREE - you only pay for hosting.</p>
		<p>Your Professional Website integrates Cadence-CRM including publishing events and an easy to use sales funnel.</p>
        <p>
            Enterprise development is a productised service subscription.  
			You pay for one month of development by our small team of expert level developers.  
			We deliver working staging site of your full stack application according to your priorities. 
            On your approval, the staging site is published on your domain. You can revert to hosting only 
            and restart development at any time. 
        </p>
	</div>
</div>
