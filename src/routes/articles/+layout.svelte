<script>
	import { pageState } from '$lib/states/pageState.svelte';
    let { children } = $props();
</script>

<div class="mt-96 mx-auto max-w-7xl px-4">
	<header>
		<h2>{pageState.title}</h2>
		<p>{pageState.strapline}</p>
	</header>
    <main>
        <section>
            {@render children()}
        </section>
    </main>
</div>

<style>
    main {
        margin-top: 2rem;
    }
    section {
        margin-top: 2rem;
    }
</style>
