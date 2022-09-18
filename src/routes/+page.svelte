<svelte:head>
	<link rel="canonical" href="/test">
	<meta name="description" content="test">
</svelte:head>
<script>
	import Foo from '$lib/Foo.svelte'
	let bar
</script>
<Foo bind:bar/>