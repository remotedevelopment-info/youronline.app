<script>
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import '$lib/styles.css';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<!-- Header Area -->
	<Header>
		<h2 class="brand">Cadence-CRM</h2>
		<h3 class="brand">Your Sales require your attention</h3>
	</Header>
	<main class="flex-grow">
		<section class="pb-16 md:pb-24">
			<ParaglideJS {i18n}>
				{@render children()}
			</ParaglideJS>
		</section>
	</main>

	<footer class="bg-gray-900 py-12 text-white">
		<div class="container mx-auto px-4">
			<Footer />
		</div>
	</footer>
</div>
