<script>
    import { browser } from '$app/environment';

    export let title = 'Box';
    export let variant = "full"
    export let scheme = 'normal';
    if ( browser ) {
        const root = document.documentElement;
        if (variant === "half") {
            root?.style.setProperty('--box-width', '50%');
        } else {
            root?.style.setProperty('--box-width', '100%');
        }
    }

</script>

<div class="box {variant} {scheme}">
    <h2>{title}</h2>
    <slot />
</div>

<style>
    h2 {
        color: var(--light);
        text-align: center;
    }
    .box {
        box-sizing: border-box;
        color: var(--light);
        box-shadow: 2px 0 2px rgba(0, 0, 0, 0.3);
        background: var(--medium);
        color: var(--white);
        padding: 1rem;
        margin: 3rem auto;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .box.inverse {
        background: var(--white);
        color: var(--cta);
    }
    .box.inverse h2 {
        color: var(--cta);
    }
    .box.full {
        width: 100%;
    }
    .box.wide {
        width: 80%;
    }
    .box.half {
        width: 50%;
    }
    .box.quarter {
        width: 25%;
    }
    .box.quarter,
	.box.half {
		min-width: 400px;
	}
    .box h2 {
        margin: 1rem;
    }
    @media (min-width: 600px) {
        .box {
            padding: 1rem;
        }
    }
    @media (min-width: 768px) {
        .box {
            padding: 1rem;
        }
    }

    @media (min-width: 1024px) {
        .box {
            padding: 2rem;
        }
    }
</style>