<script>
	export let dialog
</script>
<dialog bind:this={dialog} on:close>
	<slot/>
</dialog>

<style>
    dialog{
        border:1px solid black;
        border-radius: 15px;
    }
</style>