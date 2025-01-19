<script>
	import Hero from '$lib/Components/Hero.svelte';
	import Feature from '$lib/Components/Feature.svelte';
	import TestimonialGrid from '$lib/Components/TestimonialGrid.svelte';
	import PricingGrid from '$lib/Components/PricingGrid.svelte';
	import Contact from '$lib/Components/Contact.svelte';
	import ExclusiveOffer from '$lib/Components/ExclusiveOffer.svelte';
	import SpecialOffer from '$lib/Components/SpecialOffer.svelte';
	import AnimatedScroll from '$lib/Components/AnimatedScroll.svelte';
	import { testimonialData } from '$lib/data/testimonials.js';
	import { pricingPlans } from '$lib/data/pricing.js';
</script>

<div>
	<section id="hero">
		<!-- Hero component ... Split layout with image on right -->
		<Hero
			image="/images/person1.jpeg"
			h1="Your Business ONLINE"
			h2="FREE Website Development?"
			slogan="YourOnline offers you a website build. For FREE."
			content="Yes, there are terms and conditions. You must subscribe to 3 months of hosting on our fast cloud server or have an active subscription to Cadence-CRM."
			layout="split"
			slotted="Imagine your business can be online today or this week (if we are busy)."
		/>
		<AnimatedScroll next="feature"/>
	</section>

	<!-- Features Section -->
	<section id="feature">
		<!-- Features component -->
		<Feature format="double" background="var(--navy)" foreground="var(--white)">
			<svelte:fragment slot="header">Our Platform</svelte:fragment>

			<svelte:fragment slot="left">
				<img src="/images/at-desk.jpeg" alt="Feature demonstration" />
			</svelte:fragment>

			<svelte:fragment slot="right">
				<div class="text-2xl text-gray-900 dark:text-gray-100">
					<h3>Get more sales every day</h3>
					<p class="text-2xl text-gray-900 dark:text-gray-100">
						<strong>YourOnline</strong> a FAST site template using modern technology to render
						your content very efficiently.
					</p>
					<p>
						You can collect information from simple to build forms, connect your Cadence-CRM to the 
						site and sort our your online presence quickly. A minimum of effort.
					</p>
					<p>
						Your YourOnline site is a "frontend" site that can publish your events and take bookings.
						With Cadence-CRM integration, your new prospects can signup to your newsletter and you can send them emails from the CRM.
					</p>
				</div>
			</svelte:fragment>
			<svelte:fragment>
				Get your site build started
			</svelte:fragment>
		</Feature>
		<AnimatedScroll next="testimonials"/>
	</section>

	<!-- Testimonials Section -->
	<section id="testimonials">
		<!-- Testimonials component -->

		<TestimonialGrid
			testimonials={testimonialData}
			title="Success Stories"
			subtitle="See how businesses are orchestrating their success with Cadence CRM"
		/>
	</section>

	<!-- CTA Section with Product Grid -->
	<section id="pricing">
		<PricingGrid plans={pricingPlans} />
		<SpecialOffer />
	</section>

	<!-- Contact Section -->
	<section id="contact">
		<Contact />
	</section>

	<section id="exclusive">
		<ExclusiveOffer />
	</section>
</div>

<style>
	h1 {
		font-size: 2rem;
	}
	p {
		font-size: 1rem;
		line-height: 1.6;
		margin-top: 1rem;
	}
</style>
