export async function load() {
	return {
		products: Array(500).fill(null).map((v, i) => ({
			id: i + 1,
			name: 'Product ' + (i + 1),
			description: 'Some text',
			price: Math.floor(Math.random() * 100),
		})),
	}
}