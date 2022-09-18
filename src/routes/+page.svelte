<script>
	export let data
</script>
<h1>Products</h1>
<section class="products" on:click={e => {
	if (e.target?.tagName?.toLowerCase() == 'button') {
		alert(`Product ${e.target.dataset.id} is added to cart`)
	}
}}>
	{#each data.products as product}
		<section>
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<p>{product.price}</p>
			<button type="button" data-id={product.id}>Add to cart</button>
		</section>
	{/each}
</section>