<!-- src/lib/components/PricingCard.svelte -->
<script>
    /** @typedef {Object} Feature
     * @property {string} name - Feature description
     * @property {boolean} included - Whether feature is included
     */

    /** @typedef {Object} PricingProps
     * @property {string} title - Plan name
     * @property {string} link - Plan link
     * @property {number} price - Monthly price
     * @property {Feature[]} features - Array of features
     * @property {boolean} [isPopular=false] - Whether this is the popular plan
     * @property {string} [buttonText='Get Started'] - CTA button text
     * @property {string} [paypalId] - PayPal button ID
     * @property {string} [period='month'] - Billing period
     */

    /** @type {PricingProps} */
    let { 
        title,
        link,
        price, 
        features,
        isPopular = false,
        buttonText = 'Get Started',
        paypalId,
        period = 'month'
    } = $props();
</script>

<div class="relative flex flex-col h-full p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg
            {isPopular ? 'ring-2 ring-blue-600 dark:ring-blue-400' : 'ring-1 ring-gray-200 dark:ring-gray-700'}">
    
    {#if isPopular}
        <div class="absolute top-0 right-6 -translate-y-1/2">
            <span class="px-3 py-1 text-sm text-white bg-blue-600 dark:bg-blue-500 rounded-full">
                Most Popular
            </span>
        </div>
    {/if}

    <div class="mb-8">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p><a href="{link}">More info</a></p>
        <div class="flex items-baseline mb-4">
            <span class="text-4xl font-bold text-gray-900 dark:text-white">${price}</span>
            <span class="text-gray-500 dark:text-gray-400">/{period}</span>
        </div>
    </div>

    <ul class="space-y-4 flex-grow mb-8">
        {#each features as feature}
            <li class="flex items-center gap-3">
                <span class={feature.included ? 
                    "text-green-500 dark:text-green-400" : 
                    "text-gray-400 dark:text-gray-500"}>
                    {#if feature.included}
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M5 13l4 4L19 7" />
                        </svg>
                    {:else}
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    {/if}
                </span>
                <span class={feature.included ? 
                    "text-gray-700 dark:text-gray-300" : 
                    "text-gray-500 dark:text-gray-400"}>
                    {feature.name}
                </span>
            </li>
        {/each}
    </ul>

    {#if paypalId}
        <div id={paypalId} class="w-full"></div>
    {:else}
        <button 
            class="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 
                   dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg 
                   transition-colors duration-200">
            {buttonText}
        </button>
    {/if}
</div>