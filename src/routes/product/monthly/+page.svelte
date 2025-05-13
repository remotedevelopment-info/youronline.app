<script>
	import Feature from '$lib/Components/Feature.svelte';
	import PricingCard from '$lib/Components/PricingCard.svelte';
	import { pricingPlans, serviceDetails } from '$lib/data/pricing.js';
	
	// Get the monthly plan and its details
	const plan = pricingPlans.find(p => p.title === "Continuous Development Partnership");
	const details = serviceDetails.monthly;
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
		<span>Why Choose a Continuous Partnership?</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Dedicated Technical Team</h3>
			<p class="mb-4">Get a complete development team without the overhead of hiring. Our monthly partnership provides consistent resources that understand your business and technology.</p>
			
			<h3 class="mb-4 font-bold text-2xl">End-to-End Solutions</h3>
			<p>From architecture to implementation, we handle every aspect of your technology needs. This includes frontend, backend, DevOps, and AI integration.</p>
		</div>
	{/snippet}
	
	{#snippet rightside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Enterprise-Grade Infrastructure</h3>
			<p class="mb-4">We build robust, scalable systems that can grow with your business. Our enterprise hosting and architecture ensure your applications can handle increasing demands.</p>
			
			<h3 class="mb-4 font-bold text-2xl">Strategic Partnership</h3>
			<p>Beyond just coding, we serve as technical co-founders who help shape your product strategy, technology roadmap, and business decisions.</p>
		</div>
	{/snippet}
</Feature>

<!-- Services Included -->
<Feature
	background="var(--white)"
	foreground="var(--black)"
>
	{#snippet heading()}
		<span>Comprehensive Services Included</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">Full Stack Development</h3>
			<ul class="space-y-2 mb-6 pl-6 list-disc">
				<li>Complex web application development</li>
				<li>Mobile-responsive interfaces</li>
				<li>Backend systems and databases</li>
				<li>API development and integration</li>
				<li>Third-party service integration</li>
			</ul>
			
			<h3 class="mb-4 font-bold text-2xl">AI Systems</h3>
			<ul class="space-y-2 pl-6 list-disc">
				<li>Custom AI agent development</li>
				<li>Machine learning integration</li>
				<li>Data processing pipelines</li>
				<li>AI-powered automation</li>
				<li>Natural language processing systems</li>
			</ul>
		</div>
	{/snippet}
	
	{#snippet rightside()}
		<div class="p-6">
			<h3 class="mb-4 font-bold text-2xl">DevOps & Infrastructure</h3>
			<ul class="space-y-2 mb-6 pl-6 list-disc">
				<li>Cloud infrastructure (AWS, Azure, GCP)</li>
				<li>CI/CD pipeline management</li>
				<li>Monitoring and alerting</li>
				<li>Security implementation</li>
				<li>Scalability planning</li>
			</ul>
			
			<h3 class="mb-4 font-bold text-2xl">Strategic Services</h3>
			<ul class="space-y-2 pl-6 list-disc">
				<li>Technical architecture planning</li>
				<li>Product roadmap development</li>
				<li>Technology stack consultation</li>
				<li>Team training and knowledge transfer</li>
				<li>Technical due diligence</li>
			</ul>
		</div>
	{/snippet}
</Feature>

<!-- Service Level Agreement -->
<Feature
	background="var(--light-gray)"
	foreground="var(--black)"
	format="single"
>
	{#snippet heading()}
		<span>Service Level Agreement</span>
	{/snippet}
	
	{#snippet leftside()}
		<div class="mx-auto p-6 w-full max-w-3xl">
			<div class="space-y-6">
				<div>
					<h3 class="mb-2 font-bold text-2xl">Response Times</h3>
					<p>Critical issues: Within 1 hour</p>
					<p>Regular requests: Same business day</p>
					<p>Feature requests: 48 hours with prioritization plan</p>
				</div>
				
				<div>
					<h3 class="mb-2 font-bold text-2xl">Communication</h3>
					<p>Daily stand-up meetings</p>
					<p>Weekly review and planning sessions</p>
					<p>Monthly strategy and roadmap updates</p>
					<p>Unlimited WhatsApp support</p>
				</div>
				
				<div>
					<h3 class="mb-2 font-bold text-2xl">Deliverables</h3>
					<p>Documented code with proper version control</p>
					<p>Comprehensive testing and quality assurance</p>
					<p>Continuous deployment to staging and production</p>
					<p>Knowledge transfer sessions</p>
				</div>
				
				<div>
					<h3 class="mb-2 font-bold text-2xl">Team Allocation</h3>
					<p>Dedicated technical lead</p>
					<p>Full-stack developers</p>
					<p>DevOps specialists as needed</p>
					<p>AI engineers as needed</p>
				</div>
			</div>
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
			<h2 class="mb-6 font-bold text-3xl">Ready to transform your business?</h2>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="/contact" class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white">
					Contact Us
				</a>
				<a href="https://calendly.com/youronline-app/30min" class="bg-white hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-blue-600">
					Schedule a Discovery Call
				</a>
			</div>
		</div>
	{/snippet}
</Feature>