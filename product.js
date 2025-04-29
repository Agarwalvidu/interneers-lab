document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");

  fetch("http://127.0.0.1:8000/api/mongo/products/")
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched products:", data);

      if (!data || !Array.isArray(data.products)) {
        container.innerHTML =
          "<p class='error-message'>Failed to load products. Please try again later.</p>";
        console.warn("Unexpected data format or empty products");
        return;
      }

      if (data.products.length === 0) {
        container.innerHTML = "<p class='info-message'>No products found.</p>";
        return;
      }

      // Create a DocumentFragment to batch DOM updates
      const fragment = document.createDocumentFragment();

      data.products.forEach((product) => {
        const tile = document.createElement("div");
        tile.className = "product-tile";

        let innerHTML = `
          <div class="product-title">${product.name}</div>
          <div class="product-price">₹${product.price}</div>
        `;

        if (product.description) {
          innerHTML += `<p>${product.description}</p>`;
        }

        if (product.brand) {
          innerHTML += `<p class="product-brand">${product.brand}</p>`;
        }

        tile.innerHTML = innerHTML;
        fragment.appendChild(tile);
      });

      // Append everything at once
      container.appendChild(fragment);
    })
    .catch((err) => {
      console.error("Failed to fetch products:", err);
    });
});
