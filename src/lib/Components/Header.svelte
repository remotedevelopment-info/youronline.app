<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';

	/** @typedef {Object} NavItem
	 * @property {string} href
	 * @property {string} text
	 */

	/** @typedef {Object} CTAButton
	 * @property {string} href
	 * @property {string} text
	 * @property {string} class
	 */

	/** @typedef {Object} HeaderProps
	 * @property {string} [background]
	 * @property {string} [colour]
	 */

	/** @type {HeaderProps} */
	let { background = 'black', colour = 'white' } = $props();

	/** @type {string} */
	let logo = $state('/logo.png');

	/** @type {NavItem[]} */
	const navItems = $state([
		{ href: '/pricing', text: 'Pricing' },
		{ href: '/articles', text: 'Articles' }
	]);

	/** @type {CTAButton[]} */
	const ctaButtons = $state([
		{ href: '/page/contact', text: "Let's Chat", class: 'inverse' },
		{ href: '/page/action', text: 'Start now', class: '' }
	]);

	/** @type {HTMLElement | null} */
	let headerRef;
	let isMenuOpen = $state(false);

	/**
	 * Loads home page and sets template properties
	 * @returns {Promise<void>}
	 */
	async function loadHome() {
		if (!browser) return;

		await goto('/', { replaceState: true, invalidateAll: true });
		const defaultTemplate = 'soloentrepreneur';
		let localTemplate = window.localStorage.getItem('templateSelected') || defaultTemplate;

		if (localTemplate === 'soloentrepreneur') {
			document.documentElement?.style.setProperty('--hero-clip-path', 'circle(50% at 50% 50%)');
		}
	}

	/**
	 * Toggles the mobile menu state
	 * @param {Event} event
	 */
	function toggleMenu(event) {
		event.stopPropagation(); // Ensure the event doesn't bubble
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		/**
		 * Handles clicks outside the header
		 * @param {MouseEvent} event
		 */
		const handleClickOutside = (event) => {
			// Only process if menu is open
			if (!isMenuOpen) return;

			if (headerRef && !headerRef.contains(/** @type {Node} */ (event.target))) {
				isMenuOpen = false;
			}
		};

		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<!-- Rest of the template remains the same -->

<div bind:this={headerRef} id="up" class="header fixed top-0 z-50 w-full bg-gray-300 dark:bg-gray-700">
	<div class="container flex items-center justify-between">
		<!-- Logo Section -->
		<div class="flex items-center gap-2">
			<button class="border-0 bg-transparent p-0" on:click={loadHome} data-sveltekit-reload>
				<img src={logo} alt="logo" class="logo" />
			</button>
			<div class="logo-group-text ml-2 md:ml-3 lg:ml-4">
				<slot />
			</div>
		</div>

		<!-- Mobile Navigation Toggle -->
		<button
			class="rounded-lg pb-6 text-2xl hover:bg-gray-100/10 md:hidden"
			on:click={toggleMenu}
			aria-label="Toggle Menu"
			aria-expanded={isMenuOpen}
		>
			{#if isMenuOpen}
				<span class="text-8xl">×</span>
			{:else}
				<span class="text-8xl mt-0 mb-8 pt-0 pb-8">≡</span>
			{/if}
		</button>

		<!-- Desktop Navigation -->
		<nav class="hidden items-center gap-8 md:flex">
			<ul class="flex items-center gap-6">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="text-current transition-colors hover:text-gray-300"
							on:click={() => (isMenuOpen = false)}
						>
							{item.text}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Desktop CTA Buttons -->
			<div class="flex items-center gap-8">
				{#each ctaButtons as button}
					<a
						href={button.href}
						class="button cta {button.class}"
						on:click={() => (isMenuOpen = false)}
					>
						{button.text}
					</a>
				{/each}
			</div>
		</nav>

		<!-- Mobile Navigation Menu -->
		{#if isMenuOpen}
			<div class="absolute left-0 top-full w-full bg-gray-900 md:hidden" on:click|stopPropagation transition:slide={{ duration: 300 }}>
				<nav class="container mx-auto px-6 py-4">
					<ul class="flex flex-col gap-4">
						{#each navItems as item}
							<li>
								<a
									href={item.href}
									class="block text-lg text-current transition-colors hover:text-gray-300"
									on:click={() => (isMenuOpen = false)}
								>
									{item.text}
								</a>
							</li>
						{/each}

						{#each ctaButtons as button}
							<li class="mt-6">
								<a
									href={button.href}
									class="button cta {button.class} w-full text-center"
									on:click={() => (isMenuOpen = false)}
								>
									{button.text}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		{/if}
	</div>
</div>

<style>
	/* You can move these styles to your $lib/styles.css if preferred */
	.button.cta {
		@apply rounded-lg px-4 py-2 font-medium transition-colors;
	}

	.button.cta:not(.inverse) {
		@apply bg-blue-600 text-white hover:bg-blue-700;
	}

	.button.cta.inverse {
		@apply border-2 border-current bg-transparent hover:bg-gray-100/10;
	}

	.logo {
		width: 140px;
		height: 160px;
	}
	@media (min-width: 768px) {
		.logo {
			width: 100px;
			height: 120px;
		}
	}
</style>
