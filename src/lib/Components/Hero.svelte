<script>
    import { fade } from 'svelte/transition';
    import { browser } from '$app/environment';

    /** @typedef {Object} HeroProps
     * @property {string} image - URL of the background/side image
     * @property {string} h1 - Main heading
     * @property {string} h2 - Secondary heading
     * @property {string} [slogan] - Optional slogan text
     * @property {'full' | 'split'} [layout='full'] - Layout style
     * @property {'left' | 'center' | 'right'} [textAlign='center'] - Text alignment for full layout
     * @property {boolean} [showScroll=true] - Show scroll down indicator
     */

    /** @type {HeroProps} */
    let { 
        image, 
        h1, 
        h2, 
        slogan = '',
        layout = 'full',
        textAlign = 'center',
        showScroll = true 
    } = $props();

    let hasScrolled = $state(false);

    function scrollToNext() {
        const nextSection = document.querySelector('section:nth-of-type(2)');
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

<section 
    class="relative min-h-screen flex items-center 
           {layout === 'split' ? 'overflow-hidden bg-gray-50 dark:bg-gray-900' : ''}"
    class:bg-cover={layout === 'full'}
    class:bg-center={layout === 'full'}
    style={layout === 'full' ? `background-image: url(${image})` : ''}
>
    {#if layout === 'full'}
        <!-- Darker overlay for better contrast in both modes -->
        <div class="absolute inset-0 bg-black/50"></div>
    {/if}

    <div class="container mx-auto px-4 relative {layout === 'split' ? 'grid md:grid-cols-2 gap-8 items-center' : ''}">
        <!-- Text Content -->
        <div 
            class="{layout === 'full' ? `text-${textAlign} text-white` : 'pr-8'} 
                   {layout === 'split' ? 'order-1 md:order-none' : ''}"
        >
            <h1 
                class="text-4xl md:text-6xl font-bold mb-4 
                       {layout === 'split' ? 'text-gray-900 dark:text-white' : ''}"
                transition:fade
            >
                {h1}
            </h1>
            
            <h2 
                class="text-2xl md:text-3xl mb-6 
                       {layout === 'split' ? 'text-gray-700 dark:text-gray-300' : ''}"
                transition:fade={{ delay: 200 }}
            >
                {h2}
            </h2>

            {#if slogan}
                <p 
                    class="text-xl md:text-2xl mb-8 
                           {layout === 'split' ? 'text-gray-600 dark:text-gray-400' : ''}"
                    transition:fade={{ delay: 400 }}
                >
                    {slogan}
                </p>
            {/if}
        </div>

        <!-- Image for split layout -->
        {#if layout === 'split'}
            <div class="relative order-none md:order-1">
                <img 
                    src={image} 
                    alt="Hero" 
                    class="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-700/30"
                    transition:fade
                />
            </div>
        {/if}
    </div>

    <!-- Scroll Indicator -->
    {#if showScroll && layout === 'full'}
        <button
            class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white opacity-80 
                   hover:opacity-100 transition-all duration-300 
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
    {/if}
</section>