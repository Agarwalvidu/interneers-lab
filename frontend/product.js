document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");

  fetch("http://127.0.0.1:8000/api/mongo/products/")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched products:", data);

      // Step 4 - Render product tiles dynamically
      data.products.forEach((product) => {
        const tile = document.createElement("div");
        tile.className = "product-tile";

        tile.innerHTML = `
            <div class="product-title">${product.name}</div>
            <div class="product-price">₹${product.price}</div>
            <p>${product.description || ""}</p>
            <p class="product-brand">${product.brand || ""}</p>
          `;
        container.appendChild(tile);
      });
    })
    .catch((err) => {
      console.error("Failed to fetch products:", err);
    });
});
