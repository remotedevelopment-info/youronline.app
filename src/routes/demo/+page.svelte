<script>
	import Feature from '$lib/Components/Feature.svelte';
	import Footer from '$lib/Components/Footer.svelte';

	// This component is already upgraded to Svelte 5
	// Uses the new snippet syntax and $derived reactivity
</script>

<div class="bg-brand-100 dark:bg-brand-950 m-4 p-4">
	<h1 class="mb-4 font-bold text-3xl">Component Demo Page</h1>
	<p class="mb-8">This page demonstrates components and their Svelte 5 compatibility.</p>
	<details>
		<summary class="font-bold text-lg"
			><h2 class="inline mb-2 font-bold text-2xl">Feature Component</h2>
			<p class="mb-4">
				This component is designed to showcase a feature with a heading, left side, right side, and
				footer.
			</p>
		</summary>
		<section class="mb-8">
			<p class="mb-4">Status: ✅ Svelte 5 Ready (Using snippet syntax and $derived)</p>

			<div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
				<!-- Feature Demo -->
				<Feature background="var(--light-gray)" foreground="var(--black)" format="double">
					{#snippet heading()}
						Demo Heading
					{/snippet}

					{#snippet leftside()}
						<div class="p-6">
							<img
								src="https://picsum.photos/seed/picsum/400/300"
								alt="Placeholder"
								class="shadow-md rounded-lg"
							/>
						</div>
					{/snippet}

					{#snippet rightside()}
						<div class="p-6">
							<h3 class="mb-2 font-bold text-2xl">Feature Title</h3>
							<p class="mb-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vel augue
								venenatis fringilla. Proin hendrerit magna in nisl malesuada, vel mollis ante
								facilisis.
							</p>
							<ul class="mb-4 pl-5 list-disc">
								<li>Feature point one</li>
								<li>Feature point two</li>
								<li>Feature point three</li>
							</ul>
							<button class="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded text-white">
								Call to Action
							</button>
						</div>
					{/snippet}

					{#snippet footer()}
						<p class="mt-4 text-brand-500 dark:text-brand-400 text-sm text-center">
							Footer information goes here
						</p>
					{/snippet}
				</Feature>
			</div>
			<div class="hidden bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100">
				<h3 class="mb-2 font-bold">Component Notes:</h3>
				<ul class="pl-5 list-disc">
					<li>Already uses Svelte 5 snippet syntax</li>
					<li>Uses $derived for reactive styling</li>
					<li>Renders content via &#123;@render&#125; statements</li>
				</ul>
			</div>
		</section>
	</details>

    <details>
        <summary class="font-bold text-lg">
            <h2 class="inline mb-2 font-bold text-2xl">Footer Component</h2>
            <p class="mb-4">
                Site footer with navigation links, theme selection, and social media icons.
            </p>
        </summary>
        <section class="mb-8">
            <p class="mb-4">Status: ✅ Updated to Svelte 5 (Using $state and $effect)</p>

            <div class="border border-brand-300 dark:border-brand-700 rounded-lg overflow-hidden">
                <Footer />
            </div>
            
            <div class="hidden bg-brand-200 dark:bg-brand-800 mt-4 p-4 rounded text-gray-900 dark:text-gray-100">
                <h3 class="mb-2 font-bold">Component Notes:</h3>
                <ul class="pl-5 list-disc">
                    <li>Uses $state for theme and dark mode tracking</li>
                    <li>Uses $effect to update DOM when state changes</li>
                    <li>Theme switching works as before but with reactive state</li>
                </ul>
            </div>
        </section>
    </details>

    

    
</div>
