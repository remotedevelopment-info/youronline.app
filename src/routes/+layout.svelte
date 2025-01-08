<script>
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
//	import '$lib/typography.css';
	import '$lib/styles.css';
	import {variables} from '$lib/variables.js';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
