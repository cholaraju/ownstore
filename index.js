async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = products
      .map(
        (product) => `
      <div class="card">
        <h1 class="title">${product.title}</h1>
        <img src="${product.image}" alt="" class="images">
        <p>${product.description}</p>
        <p class="category">${product.category}</p>
        <p class="price">${product.price}</p>
      </div>
    `
      )
      .join("");
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

fetchProducts();
