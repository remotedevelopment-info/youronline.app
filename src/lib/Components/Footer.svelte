<script>
    const currentYear = new Date().getFullYear();
    let theme; 
    let isDark = true;

    function toggleDarkMode() {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark');
    }

    function switchTheme(newTheme) {
        //theme = newTheme;
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    /**
     * Navigation link categories and their associated links
     * @type {Object.<string, Array.<{
     *   text: string,
     *   href: string,
     *   blurb?: string
     * }>>}
     */
    const links = {
        product: [
            { text: 'Features', href: '/#features' },
            { text: 'Pricing', href: '/pricing' },
            { text: 'Articles', href: '/articles' },
            { text: 'Success Stories', href: '/#testimonials' }
        ],
        company: [
            { text: 'Cadence-CRM', href: 'https://crm.youronline.app' },
            {
                text: 'Youronline Website',
                href: 'https://youronline.uk',
                blurb: 'YourOnline Builds FAST websites like this one'
            },

        ],
        support: [
            { text: 'Contact', href: '/contact' },
            { text: 'Terms and Conditions', href: '/articles/terms-conditions' },
            { text: 'Privacy Policy', href: '/articles/privacy-policy' }
        ]
    };
</script>

<footer class="w-full">
    <div class="border-brand-300 from-brand-200 to-brand-300 dark:border-brand-700 dark:from-brand-700 dark:to-brand-800 w-full border-t bg-gradient-to-b pb-1 pt-2">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div class="mt-2 flex flex-col items-center">
                <img src="/logo.jpeg" alt="Cadence CRM" class="h-48 w-auto" />
                <p class="text-brand-500 dark:text-brand-400 mt-1 text-base text-sm">
                    <em> Your business, in perfect rhythm </em>
                </p>
            </div>

            {#each Object.entries(links) as [category, items]}
                <div class="mt-8">
                    <h3 class="text-brand-400 dark:text-brand-300 text-sm font-semibold uppercase tracking-wider">
                        {category}
                    </h3>
                    <ul class="mt-4 space-y-2">
                        {#each items as { text, href, blurb }}
                            <li>
                                <a {href} class="text-brand-500 hover:text-brand-900 dark:text-brand-400 text-base dark:hover:text-white">
                                    {text}
                                </a>
                                {#if blurb}
                                    <br><em class="text-brand-400 dark:text-brand-300 text-xs">{blurb}</em>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex min-w-24 items-center justify-center gap-1 py-2">
        <button
            on:click={() => switchTheme('purple')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'purple' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="h-5 w-5">
                <circle cx="10" cy="10" r="8" fill="#7C3AED" />
            </svg>
        </button>

        <button
            on:click={() => switchTheme('blue')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'blue' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="h-5 w-5">
                <circle cx="10" cy="10" r="8" fill="#2563EB" />
            </svg>
        </button>

        <button
            on:click={() => switchTheme('green')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'green' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="h-5 w-5">
                <circle cx="10" cy="10" r="8" fill="#059669" />
            </svg>
        </button>

        <button
            on:click={() => switchTheme('orange')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'orange' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="h-5 w-5">
                <circle cx="10" cy="10" r="8" fill="#EA580C" />
            </svg>
        </button>

        <button
            on:click={() => switchTheme('red')}
            class="h-5 w-5 rounded-full transition-all hover:ring-2 hover:ring-offset-2 {theme === 'red' ? 'ring-2 ring-offset-2' : ''}"
        >
            <svg viewBox="0 0 20 20" class="h-5 w-5">
                <circle cx="10" cy="10" r="8" fill="#DC2626" />
            </svg>
        </button>
        <button on:click={() => toggleDarkMode()} class="text-xs">
            {isDark === false ? '☀️' : '🌙'}
        </button>
    </div>

    <div class="border-brand-300 from-brand-300 to-brand-400 dark:border-brand-800 dark:from-brand-800 dark:to-brand-900 border-t bg-gradient-to-b pb-3 pt-2">
        <p class="text-brand-500 dark:text-brand-600 text-center text-base text-xs">
            © {currentYear} Cadence-CRM. All rights reserved.
        </p>
    </div>
</footer>