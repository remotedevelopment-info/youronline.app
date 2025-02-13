<script>
	import { pageState } from '$lib/states/pageState.svelte';
    let { children } = $props();
</script>

<div class="mt-12 mx-auto max-w-7xl px-4">
	<header>
		<h2>{pageState.title}</h2>
		<p>{pageState.strapline} <a href="/articles">List</a>
	</header>
    <main>
        <section>
            {@render children()}
        </section>
    </main>
</div>
