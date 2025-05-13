<script>
	import { variables } from '$lib/variables.js';
	/**
	 * @type {string}
	 */
	export let heading;
	/**
	 * @type {string}
	 */
	export let fixedPrice = 0;
	/**
	 * @type {string}
	 */
	export let setupPrice = 0;
	/**
	 * @type {string}
	 */
	export let monthly;
	export let monthlyHosting;
	/**
	 * @type {string}
	 */
	export let annual;
	/**
	 * @type {string}
	 */
	export let annualNote;
	/**
	 * @type {string}
	 */
	export let freeCTA;
	/**
	 * @type {string}
	 */
	export let monthlyPaypalLink;
	export let monthlyPaypalMembersLink;
	export let trialdays;
	/**
	 * @type {string}
	 */
	export let annualPaypalLink;
	/**
	 * @type {string}
	 */
	export let monthlyDescription;
	/**
	 * @type {string}
	 */
	export let annualDescription;
	/**
	 * @type {string}
	 */
	export let planDetails;
	/**
	 * @type {string}
	 */
	export let logo;
	/**
	 * @type {boolean}
	 */
	export let disclaimer = true;
	export let invoicing = false;
	
	const vat = variables.vat.length > 0;

	let includeVAT = vat ? true : false;

	const monthlyVAT = vat ? parseFloat(monthly) * 1.2 : parseFloat(monthly);
	const annualVAT = vat ? parseFloat(annual) * 1.2 : parseFloat(annual);
	const setupPriceVAT = vat ? parseFloat(setupPrice) * 1.2 : parseFloat(setupPrice);
</script>

<div class="panel">
	<div class="row">
		<div class="details centered">
			<div class="row centered">
				<img src={logo} alt={logo} class="logo" />
				<h3>{heading}</h3>
			</div>
			{planDetails}
			{#if fixedPrice}
				<h3>Fixed Price deal</h3>
			{:else}
				<h3>Subscription price</h3>
			{/if}
			<ul class="indent">
				{#if freeCTA}
					<li>{freeCTA}</li>
				{/if}
				{#if parseFloat(setupPrice) > 0}
					<li>
						Setup £{includeVAT ? setupPriceVAT.toFixed(2) : parseFloat(setupPrice).toFixed(2)}
					</li>
				{/if}
				{#if fixedPrice}
					<li>Price £{fixedPrice}</li>
				{/if}
				{#if monthly}
					<li>
						Monthly Subscription £{includeVAT
							? monthlyVAT.toFixed(2)
							: parseFloat(monthly).toFixed(2)}
					</li>
				{/if}
				{#if monthlyHosting && monthlyHosting !== '0'}
					{#if fixedPrice}
						<em>plus</em>
					{:else}
						<em>or</em>
					{/if}
					<li>Monthly hosting £{monthlyHosting}</li>
				{/if}
				{#if monthlyPaypalMembersLink}
					<li>
						Monthly £{includeVAT ? monthlyVAT.toFixed(2) : parseFloat(monthly).toFixed(2)} (members)
					</li>
				{/if}
				{#if trialdays}
					<li>Free trial for {trialdays} days</li>
				{/if}
				{#if annualPaypalLink}
					<li>
						Annual £{includeVAT ? annualVAT.toFixed(2) : parseFloat(annual).toFixed(2)}
						{annualNote}
					</li>
				{/if}
			</ul>
			<div class="cta centered">
				{#if monthlyPaypalLink}
					<a class="button primary medium" href={monthlyPaypalLink}>
						{monthlyDescription}
					</a>
				{/if}
				{#if monthlyPaypalMembersLink}
					<a class="button primary medium" href={monthlyPaypalMembersLink}>
						{monthlyDescription} (members)
					</a>
				{/if}
				{#if annualPaypalLink}
					<a class="button primary medium" href={annualPaypalLink}>
						{annualDescription}
					</a>
				{/if}

				{#if !freeCTA && vat}
					<a class="primary medium" on:click={() => (includeVAT = !includeVAT)}
						>{includeVAT ? 'exclude' : 'include'} VAT</a
					>
				{/if}
			</div>
			{#if freeCTA}
				<a href="/page/action">Simply start here</a> to get on our waiting list or
				<a href="mailto:sales@youronline.uk?subject=Free%20Website%20Request"> email us now</a> if you
				have any questions.
			{:else if disclaimer}
				<p class="small">
					Subscription buttons will navigate to Paypal. Requires a free account. Payment processed
					by Software Antelope Ltd. A UK Registered Company. Payment processor and subscription
					managed by Paypal.
				</p>
			{/if}
			{#if invoicing}
				<p class="small">
					Enterprise subscription available with invoicing after one month subscription. Please contact us for details.
				</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.details > h4 {
		margin-top: 0;
	}
	.details {
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
	}
	.small {
		font-size: 1rem;
	}
	.row {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		gap: 1rem;
	}
	.row.centered, 
	.cta.centered {
		justify-content: center;
		align-items: center;
	}
	.logo {
		width: 100px;
		height: auto;
		margin: 0;
		margin-left: -2em;
		padding: 0;
		margin: 2rem 0;
		opacity: 0.8;
		background: white;
		color: black;
	}
	.button {
		opacity: 0.8;
		background: #2211ff;
		color: white;
		border-radius: 4px;
		border: 1px solid white;
		padding: 0.5rem 1rem;
		text-decoration: none;
		cursor: pointer;
		margin: 1rem 0;
	}
	.logo:hover,
	.button:hover {
		transform: scale(1.1);
		transition: transform 1s ease-in-out;
		opacity: 1;
	}
	.cta {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: start;
		gap: 0.5rem;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
	}
	.cta.medium {
		color: var(--dark);
		background: var(--light);
		text-decoration: none;
		cursor: pointer;
	}
	.OLDcta {
		height: 3rem;
		margin: 1rem auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	@media screen and (min-width: 768px) {
		.row {
			display: flex;
			flex-direction: row;
		}
	}
	@media screen and (min-width: 1024px) {
		.logo {
			padding: 1rem;
			margin: 0;
		}
	}
	@media screen and (min-width: 768px) {
		.logo {
		}
	}
</style>
