<script>
	import Hero from '$lib/Components/Hero.svelte';
	import Feature from '$lib/Components/Feature.svelte';
	import TestimonialGrid from '$lib/Components/TestimonialGrid.svelte';
	import PricingGrid from '$lib/Components/PricingGrid.svelte';
	import Contact from '$lib/Components/Contact.svelte';
	import ExclusiveOffer from '$lib/Components/ExclusiveOffer.svelte';
	import { testimonialData } from '$lib/data/testimonials.js';
	import { pricingPlans } from '$lib/data/pricing.js';
</script>

<div>
	<section>
		<div class="cover">
			<!-- Hero component ... Split layout with image on right -->
			<Hero
				image="/images/modern-workspace.jpeg"
				h1="Do you need to sell more?"
				h2="The secret is to contact and connect"
				slogan="Convert your prospects into customers"
				layout="split"
				showScroll={false}
			/>
		</div>
	</section>

	<!-- Features Section -->
	<section class="bg-gray-50 py-16 md:py-24 dark:bg-gray-900">
		<div class="container mx-auto px-4">
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
							<strong>Cadence CRM</strong> is a Customer Relationship Management tool to help you quickly
							process your prospects and develop then into customers, inviting them to events both online
							and in person.
						</p>
						<p>
							The emphasis is on speed of use. While you are contacting your customers, take notes,
							send messages and with press button simplicity <strong>Cadence CRM</strong> records what
							you do. Our unique AI engine provides a natural flow of deal progression.
						</p>
					</div>
				</svelte:fragment>

				<svelte:fragment>
					Easy to use intuitive workflows that help with contacting your people without the
					complexity.
				</svelte:fragment>
			</Feature>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="py-16 md:py-24">
		<div class="container mx-auto px-4">
			<!-- Testimonials component -->

			<TestimonialGrid
				testimonials={testimonialData}
				title="Success Stories"
				subtitle="See how businesses are orchestrating their success with Cadence CRM"
			/>
		</div>
	</section>

	<!-- CTA Section with Product Grid -->
	<section class="bg-gray-50 py-16 md:py-24 dark:bg-gray-900">
		<div class="container mx-auto px-4">
			<!-- CTA Header -->
			<div class="mb-16">
				<!-- CTA component -->
			</div>

			<!-- Product Grid -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
				<!-- Product cards will be mapped here -->
				<PricingGrid plans={pricingPlans} />
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="py-16 md:py-24">
		<div class="container mx-auto px-4">
			<Contact />
		</div>
	</section>
	<section class="py-16 md:py-24">
		<div class="container mx-auto px-4">
			<ExclusiveOffer />
		</div>
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
