<script>
    /** @typedef {'double' | 'single'} FeatureFormat */
    
    /** @typedef {Object} FeatureProps
     * @property {FeatureFormat} [format='double'] - Layout format
     * @property {string} [background='var(--black)'] - Background color
     * @property {string} [foreground='var(--white)'] - Foreground color
     * @property {boolean} [footer=true] - Show footer
     * @property {boolean} [header=false] - Show header
     */

    /** @type {FeatureProps} */
    let {
        format = 'double',
        background = 'var(--black)',
        foreground = 'var(--white)',
        footer = true,
        header = false
    } = $props();

    /** @type {string} */
    let featureStyle = $derived(
        `background: ${background}; color: ${foreground}`
    );
</script>

<div class="flex flex-col items-center box-border p-0 m-0 overflow-auto break-words w-full
            bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

    {#if header}
        <div class="flex flex-row justify-between items-center w-full">
            <h2 class="text-4xl md:text-5xl font-bold">
                <slot name="header" />
            </h2>
        </div>
    {/if}

    <div class="flex flex-col lg:flex-row justify-center gap-4 flex-1 p-0 w-full">
        <!-- Left side -->
        <div class="h-auto flex-none p-4 md:p-8 flex items-center justify-center
                    {format === 'double' ? 'lg:w-[42%]' : 'lg:w-full'}
                    [&:has(img)]:w-192 [&:has(img)]:p-0">
            <slot name="left" />
        </div>

        {#if format === 'double'}
            <!-- Right side -->
            <div class="w-full h-auto flex-none p-4 md:p-8 flex items-center justify-center lg:w-[42%]
                        [&:has(img)]:w-full [&:has(img)]:p-0">
                <slot name="right" />
            </div>
        {/if}
    </div>

    {#if footer}
        <div class="mx-4 py-12">
            <slot />
        </div>
    {/if}
</div>

<style>
    .feature-side {
        width: 100%;
        height: auto;
        flex: 0 1 auto;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .feature-side:has(img) {
        width: 100%;
        padding: 0;
    }

    /* Global styles for images within slots */
    .feature-side :global(img) {
        overflow: hidden;
        padding: 0;
        width: auto;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    @media (min-width: 1024px) {
        .feature-side :global(img) {
            overflow: hidden;
            padding: 0;
            border-radius: 20px;
            max-height: 600px;
        }
    }

    @media (min-width: 1440px) {
        .feature-side {
            padding: 2rem;
        }
    }

    .feature-image-wrapper {
        @apply overflow-hidden w-auto h-auto;
    }

    @media (min-width: 1024px) {
        .feature-image-wrapper {
            @apply p-0 rounded-2xl;
        }
        .feature-image-wrapper :global(img) {
            @apply max-h-[600px];
        }
    }

    @media (min-width: 1440px) {
        .feature-image-wrapper {
            @apply p-8;
        }
    }
</style>