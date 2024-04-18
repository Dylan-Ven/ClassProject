<script>
	export let email
</script>
<dialog bind:this={email} on:close>
	<slot/>
</dialog>

<style>
    dialog{
        border:1px solid black;
        border-radius: 15px;
    }
</style>