const FakeStoreApi = {
    fetchAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        const result = res.json();
        return result;
    },
    fetchProductById: async (productId) => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const result = await res.json()
        return result
    },
    fetchProductsBySearchQuery: async (query) => {
        const res = await fetch("https://fakestoreapi.com/products")
        const result = await res.json()
        return result.filter((product) => product.title.toLowerCase().includes(query))
    },
    fetchElectronicsProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products/category/electronics")
        const result = await res.json()
        return result;
    },
    fetchMenProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products/category/men's clothing")
        const result = await res.json()
        return result;
    },
    fetchWomenProducts: async () => {
        const res = await fetch("https://fakestoreapi.com/products/category/women's clothing")
        const result = await res.json()
        return result;
    }
}

export { FakeStoreApi }