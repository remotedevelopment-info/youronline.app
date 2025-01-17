<script>
	import { goto } from '$app/navigation';
	import PricingGrid from '$lib/Components/PricingGrid.svelte';
	import { pricingPlans } from '$lib/data/pricing.js';
</script>

<!-- CTA Section with Product Grid -->
<section class="bg-gray-50 py-16 md:py-24 dark:bg-gray-900">
	<div class="container mx-auto px-4">
		<!-- CTA Header -->
		<div class="mb-16">
			<!-- CTA component -->
		</div>

		<!-- Product Grid -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
			<!-- Product cards will be mapped here -->
			<PricingGrid plans={pricingPlans} />
		</div>
        <div class="border-solid flex flex-col justify-center items-center w-full px-12 md:px-24 lg:px-40">
            <h3 class="text-4xl">Free Access</h3>
            <p>Our pricing plans will become available for online subscription 
                on 1st February 2025, in the meantime you can access Cadence-CRM for FREE.
                Press the Start now button, send a message with your email and 
                we will activate your FREE account.
            </p>
            <button class="primary" on:click={()=>goto('/page/action')}>Start now</button>
        </div>
	</div>
</section>
