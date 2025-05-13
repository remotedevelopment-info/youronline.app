<script>
	import Feature from '$lib/Components/Feature.svelte';
	import PricingCard from '$lib/Components/PricingCard.svelte';
	import { pricingPlans, serviceDetails } from '$lib/data/pricing.js';
	
	// Get the hourly plan and its details
	const plan = pricingPlans.find(p => p.title === "On-Demand Expertise");
	const details = serviceDetails.hourly;
</script>

<svelte:head>
	<title>{details.title} - YourOnline.app</title>
	<meta name="description" content={details.subtitle} />
</svelte:head>

<!-- Hero Banner -->
<Feature 
	background="var(--light-gray)" 
	foreground="var(--black)"
>
	{#snippet heading()}
		<span>{details.title}</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="mx-auto w-full max-w-sm">
			<PricingCard {...plan} showLink={false}/>
		</div>
	{/snippet}
	
	{#snippet rightside()}
		<div class="flex flex-col gap-6 p-6">
			<h2 class="font-bold text-3xl">{details.subtitle}</h2>
			<p class="text-lg">{details.description}</p>
			
			<h3 class="mt-4 font-bold text-xl">Perfect For:</h3>
			<ul class="space-y-2 pl-6 list-disc">
				{#each details.useCases as useCase}
					<li>{useCase}</li>
				{/each}
			</ul>
		</div>
	{/snippet}
</Feature>

<!-- How it works -->
<Feature
	background="var(--white)"
	foreground="var(--black)"
	format="single"
>
	{#snippet heading()}
		<span>How It Works</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="mx-auto w-full max-w-3xl">
			<div class="gap-8 grid grid-cols-1 md:grid-cols-2">
				{#each details.process as step, i}
					<div class="flex items-start gap-4">
						<div class="flex justify-center items-center bg-blue-600 rounded-full w-10 h-10 font-bold text-white text-xl">
							{i+1}
						</div>
						<p class="text-lg">{step}</p>
					</div>
				{/each}
			</div>
		</div>
	{/snippet}
</Feature>

<!-- Benefits -->
<Feature
	background="var(--light-gray)"
	foreground="var(--black)"
>
	{#snippet heading()}
		<span>Why On-Demand Expertise?</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Cost-Effective Expertise</h3>
			<p class="mb-4">Access senior developer talent without the cost of a full-time hire. Our hourly model means you only pay for what you need.</p>
			
			<h3 class="mb-4 font-bold text-2xl">AI-Enhanced Development</h3>
			<p>We combine human expertise with cutting-edge AI tools to deliver solutions faster and more efficiently than traditional development approaches.</p>
		</div>
	{/snippet}
	
	{#snippet rightside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Knowledge Transfer</h3>
			<p class="mb-4">We don't just solve problems, we teach your team how to use AI tools effectively, building your internal capabilities for the future.</p>
			
			<h3 class="mb-4 font-bold text-2xl">Rapid Response</h3>
			<p>When technical challenges arise, you need answers quickly. Our on-demand service ensures you get expert help when you need it most.</p>
		</div>
	{/snippet}
</Feature>

<!-- CTA Section -->
<Feature
	background="var(--black)"
	foreground="var(--white)"
	format="single"
>
	{#snippet leftside()}
		<div class="p-8 text-center">
			<h2 class="mb-6 font-bold text-3xl">Ready to get started?</h2>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/contact" class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white">
					Contact Us
				</a>
				<a href="https://calendly.com/youronline-app/30min" class="bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-blue-600">
					Book a Consultation
				</a>
			</div>
		</div>
	{/snippet}
</Feature>