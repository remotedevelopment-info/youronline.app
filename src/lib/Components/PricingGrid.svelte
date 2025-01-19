
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

<div class="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {#each plans as plan}
                <PricingCard {...plan} />
            {/each}
        </div>
    </div>
</div>