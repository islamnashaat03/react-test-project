// START FETCHING PRODUCTS
async function fetchProducts() {
  try {
    const result = await fetch('https://dummyjson.com/products');
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error, 'Failed to fetch products');
  }
}

fetchProducts();
