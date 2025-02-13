<script>
    let { value = $bindable(), ...props } = $props();
</script>

<div class="bg-slate-300">
    <input bind:value={value} {...props} />
    <div class="text-red-800">
        This is what you typed in the component 
        <p class="text-red-500">{value}</p>
    </div>
</div>

