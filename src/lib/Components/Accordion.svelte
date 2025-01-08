<script>
	import { currentPage } from '$lib/stores.js';
	import { browser } from '$app/environment';
	export let header = 'Click + to open';
	export let headerStyle = 'large';
	export let variant = 'inline';
	export let opened = false;
	export let icon = '';
	export let id = 'accordion';
	export let comment = '';
	let openState = opened;

	currentPage.subscribe((value) => {
		if (value && value.title === id.toLowerCase()) {
			openState = true;
			console.log('currentPage is now ', value);
		}
	});

	function toggleOpen() {
		openState = !openState;
	}

	if (variant === 'inline') {
		if (browser) {
			const root = document.documentElement;
			root.style.setProperty('--accordion-header-background', 'none');
		}
	}

	const downarrow = '/images/icons/down.svg';
</script>

<div class="accordion-container">
	<div class="accordion size {openState ? 'large' : 'small'}">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="accordion-header {headerStyle} {openState ? 'opened' : 'closed'}"
			on:click={() => toggleOpen()}
			on:keypress={() => toggleOpen()}
		>
			<div class="accordion-header__text">
				<div class="accordion-header__text--header {variant}">
					<slot name="header">{header}</slot>
				</div>
				<div class="accordion-header__text--comment">
					<em>
						<slot name="comment">{comment}</slot>
					</em>
				</div>
			</div>
			<button class="control">
				<img class="down" class:turn={openState} src={downarrow} alt="down-arrow" />
			</button>
		</div>
		<div class="accordion-icon">
			<slot name="icon">{icon}</slot>
		</div>
		<div class="accordion-body {openState?'opened':'closed'}">
			<slot />
		</div>
	</div>
</div>

<style>
	:host {
		--accordion-header-background: var(--medium);
	}
    .accordion-container {
        display: block;
        z-index: 10;
    }
	.accordion {
		/* set pointer to an arrow */
		cursor: pointer;
		pointer-events: auto;
	}
	.size.small {
		font-size: smaller;
		margin-left: 0;
	}
	.size.large {
		height: auto;
		font-size: small;
	}
	.accordion {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		width: 100%;
		margin: 0.25rem 0;
		border: 1px outset var(--medium-dark);
		background: var(--dark);
	}

	.size.small .accordion-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 100%;
		font-size: 1.25rem;
		border-radius: 0.25rem;
	}
	.size.small .accordion-header.emphasis {
		font-weight: 700;
	}
	.accordion-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
		font-size: 1.5rem;
		background: var(--accordion-header-background, var(--dark));
		color: var(--white);
		box-shadow: 0 0 1.5rem var(--dark);
		font-family: 'Archivo Black', sans-serif;
		font-weight: 600;
		padding: 0 1rem;
	}
	.accordion-header {
		background: var(--dark);
		color: var(--white);
	}
	.accordion-header.closed {
		background: var(--accordion-header-background, var(--dark));
		color: var(--light)	
	}
	.accordion-header__text {
		align-items: center;
		justify-content: start;
	}
	.accordion-header__text--header.inline {
		font-weight: 400;
		min-width: unset;
		--accordion-header-background: var(--dark);
	}
	.accordion-header__text--comment {
		font-size: 1rem;
		font-style: italic;
	}
	.accordion-header.emphasis {
		font-weight: 700;
		color: var(--white);
		margin-left: 0;
	}
	.accordion.size.small .accordion-header.large {
		font-size: 1.25rem;
		font-weight: 900;
		margin: 0.25rem 0;
	}
	.accordion.size.large .accordion-header.large {
		font-family: 'Archivo Black', sans-serif;
		font-size: 1.75rem;
		font-weight: 900;
		margin: 0.5rem 0.25rem 0;
	}
	.accordion-body {
		padding: 0 0.5em;
		margin: 0;
		background: var(--accordion-body-background, var(--light));
		color: var(--accordion-body-color, var(--dark));
		display: none;
		font-size: large;

	}
	.accordion-body.opened {
		display: block;
	}
	.accordion-body.closed {
		display: none;
	}
	button.control {
		border: none;
		background: transparent;
		box-shadow: none;
	}
	.control .down {
		fill: var(--light);
		filter: invert(82%) sepia(93%) saturate(1352%) hue-rotate(200deg) brightness(119%)
			contrast(119%);
		font-weight: 900;
		transition: all 0.5s ease-out;
	}
	img.down {
		font-weight: 900;
		border: 0;
		width: 24px;
		height: auto;
	}
	img.turn {
		transform: rotate(180deg);
	}
</style>
