<script>
    import { goto } from '$app/navigation';
	import Icon from '$lib/Icon.svelte';
    export let icon = '';
    export let url = ''
	export let background = ''

</script>

<div class="card" style={background ? 'background: '+background : ''}>
	<div class="topline">
		<div class="icon">
			<Icon name="{icon}" />
		</div>
		<slot name="image" />
	</div>
		<div class="heading">
			<p class="main-heading">
				<slot name="heading" />
			</p>
			<p class="subheading">
				<slot name="subheading" />
			</p>
		</div>
		
	<div class="body">
		
		<slot />
	</div>
	<div class="cta">
		<button on:click={() => goto(url)} class="forward-arrow minimal plain"> Learn More &rAarr; </button>
	</div>
</div>
<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-around;
		margin: 0;
        padding: 1rem;
		min-width: 340px;
		max-width: 450px;
        min-height: 12rem;
        border: 2px outset var(--light);
        color: var(--dark);
		background: var(--pure-white);
	}
    .body {
        min-height: 22rem;
        color: var(--dark);
    }
    .icon {
        background: #9f9fdf;
		color: white;
        border-radius: 15px;
        padding: 8px 4px 4px 12px;
        width: 48px;
        height: 48px;
    }
	.heading {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		width: 100%;
	}
	.topline {
		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: space-between;
		width: 100%;
	}
	.main-heading {
		display: block;
		font-size: 1.5rem;
		font-weight: 700;
		width: 100%;
		padding: 1rem 0 0;
		margin: 0;
		color: var(--dark);
		font-family: var(--heading-font);
		font-variant: small-caps;
	}
	.subheading {
		display: block;
		font-size: 0.9rem;
		width: 100%;
		padding: 0.25rem 0;
		margin: 0;
		font-family: var(--heading-font);
	}
	button.minimal {
		font-size: 0.9rem;
		font-weight: 700;
		background: none;
		border: none;
		padding: 0;
		margin: 1rem 0;
	}

</style>
