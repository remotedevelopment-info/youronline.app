<script>
	// let { name = $bindable(), format = 'double' } = $props();
	let { children } = $props();
</script>

<div>
    <nav>
        <a href="/demo">Demo</a>
        <a href="/demo/paraglide">Lang</a>
        <a href="/demo/binding">Binding</a>
        <a href="/demo/api">API</a>
    </nav>
	<div class="p-4 m-4">
		{@render children()}
	</div>
</div>
