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
	<section>
		<!-- Hero component ... Split layout with image on right -->
		<Hero
			image="/images/before-after.jpeg"
			h1="Need to sell more?"
			h2="The secret is to contact and connect!"
			slogan="Convert your prospects into customers."
			content="It takes consistent commumnication to drive demand for your business."
			layout="split"
			slotted="Imagine a stream of customers buying from your business regularly. You know you have to do the
			work, but how do you keep track and maintain contact with a lot of prospects?"
		/>
		<AnimatedScroll />
	</section>
	<!-- Features Section -->
	<section>
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
						<strong>Cadence CRM</strong> is a Customer Relationship Management tool to help you efficiently
						manage your prospects connections to develop them into customers. It is designed for the
						modern entreprenur, coach or business that gets it. Contact needs to be tracked and measured.
					</p>
					<p>
						<strong>Cadence CRM</strong> also helps you manage your online and in person events. This
						is now an essential tool to grow your business.
					</p>
					<p>
						The emphasis is on speed and simplicity. While you are contacting your customers, take
						notes, send email messages with press button simplicity <strong>Cadence CRM</strong> records
						what you do.
					</p>
					<p>Our unique AI engine provides a natural flow of deal progression.</p>
				</div>
			</svelte:fragment>
			<svelte:fragment>
				Easy to use intuitive workflows that help with contacting your people without the
				complexity.
			</svelte:fragment>
		</Feature>
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
	<section class="bg-gray-50 dark:bg-gray-900">
		<!-- Product cards will be mapped here -->
		<PricingGrid plans={pricingPlans} />
		<SpecialOffer />
	</section>

	<!-- Contact Section -->
	<section class="py-16 md:py-24">
		<Contact />
	</section>

	<section class="py-16 md:py-24">
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
