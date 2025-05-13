<script>
	import { goto } from '$app/navigation';
	import { pricingPlans } from '$lib/data/pricing.js';
</script>

<section>
	<div class="page-content">
		<div class="flex flex-row">        
			<div>
				<slot />
			</div>
		</div>
	</div>
</section>
