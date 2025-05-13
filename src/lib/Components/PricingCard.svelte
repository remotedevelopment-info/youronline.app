<!-- src/lib/components/PricingCard.svelte -->
<script>
    import PaypalOffer from "$lib/Components/PaypalOffer.svelte";
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
        <div class="top-0 right-6 absolute -translate-y-1/2">
            <span class="bg-blue-600 dark:bg-blue-500 px-3 py-1 rounded-full text-white text-sm">
                Most Popular
            </span>
        </div>
    {/if}

    <div class="mb-8">
        <h3 class="mb-2 font-bold text-gray-900 dark:text-white text-xl">{title}</h3>
        <p><a href="{link}">More info</a></p>
        <div class="flex items-baseline mb-4">
            <span class="font-bold text-gray-900 dark:text-white text-4xl">£{price}</span>
            <span class="text-gray-500 dark:text-gray-400">/{period}</span>
        </div>
    </div>

    <ul class="flex-grow space-y-4 mb-8">
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

    {#if paypalId === 'basic-paypal-btn'}
        <div id={paypalId} class="w-full">
            <PaypalOffer
                heading="Basic subscription"
                logo="/packages/basic.svg"
                setupPrice="0"
                monthly="49"
                annual="490"
                monthlyPaypalLink="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-396299840S993105VM77ARWA"
                monthlyDescription="Start subscription"
                annualNote=""
                annualDescription="12 months for the price of 10 months"
                annualPaypalLink=""
                planDetails="Basic subscription for 1 person business, 250 prospects and customers. Includes upgrades and basic support."
                disclaimer={true}
                invoicing={false}
            />
        </div>
    {:else if paypalId === 'premium-paypal-btn'}
        <div id={paypalId} class="w-full">
            <PaypalOffer
                heading="Premium subscription"
                logo="/packages/premium.svg"
                setupPrice="0"
                monthly="99"
                annual="990"
                monthlyPaypalLink="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-9M322418LL849400TM77ASWY"
                monthlyDescription="Start subscription"
                annualNote=""
                annualDescription="12 months for the price of 10 months"
                annualPaypalLink=""
                planDetails="Premium subscription for 1 person business, 1000 prospects and customers. Includes upgrades and basic support."
                disclaimer={true}
                invoicing={false}
            />
        </div>
    {:else if paypalId === 'enterprise-paypal-btn'}
        <div id={paypalId} class="w-full">
            <PaypalOffer
                heading="Enterprise subscription"
                logo="/packages/enterprise.svg"
                setupPrice="0"
                monthly="4000"
                monthlyPaypalLink="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7PJ48337RA009662TM77ATXY"
                monthlyDescription="Start subscription"
                annualNote=""
                annualDescription="12 months for the price of 10 months"
                annualPaypalLink=""
                planDetails="Enterprise subscription for 1 person business, 5000 prospects and customers. Includes upgrades and basic support."
                disclaimer={true}
                invoicing={true}
            />
        </div>
    {:else}
        <button 
            class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-lg w-full text-white transition-colors duration-200">
            {buttonText}
        </button>
    {/if}
</div>