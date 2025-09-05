// Render products
function renderProducts(category = null) {
  const productList = document.getElementById("productList");
  if (!productList) return;

  productList.innerHTML = "";

  Object.keys(productsData).forEach(cat => {
    if (category && category !== cat) return;

    productsData[cat].forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}" style="width:200px;height:200px;object-fit:cover;">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="viewDetails('${product.id}')">View Details</button>
        <button onclick="addToCart('${cat}', '${product.id}')">Add to Cart</button>
      `;
      productList.appendChild(productCard);
    });
  });
}

// Filter by category
function filterByCategory(category) {
  renderProducts(category);
}

// Search products
function searchProducts() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const productList = document.getElementById("productList");
  if (!productList) return;

  productList.innerHTML = "";

  Object.keys(productsData).forEach(cat => {
    productsData[cat].forEach(product => {
      if (product.name.toLowerCase().includes(query)) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
          <img src="${product.images[0]}" alt="${product.name}" style="width:200px;height:200px;object-fit:cover;">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button onclick="viewDetails('${product.id}')">View Details</button>
          <button onclick="addToCart('${cat}', '${product.id}')">Add to Cart</button>
        `;
        productList.appendChild(productCard);
      }
    });
  });
}

// Redirect to product details
function viewDetails(productId) {
  window.location.href = `product.html?id=${productId}`;
}

// Add to cart
function addToCart(category, id) {
  const product = productsData[category].find(p => p.id === id);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

// Load product details (for product.html)
function loadProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");

  if (!productId) {
    document.getElementById("productDetail").innerHTML = "<h2>No product selected</h2>";
    return;
  }

  let selectedProduct = null;
  let selectedCategory = null;

  Object.keys(productsData).forEach(category => {
    productsData[category].forEach(product => {
      if (product.id === productId) {
        selectedProduct = product;
        selectedCategory = category;
      }
    });
  });

  if (!selectedProduct) {
    document.getElementById("productDetail").innerHTML = "<h2>Product not found</h2>";
    return;
  }

  const container = document.getElementById("productDetail");
  container.innerHTML = `
    <h2>${selectedProduct.name}</h2>
    <div class="image-slider">
      ${selectedProduct.images
        .map(img => `<img src="${img}" alt="${selectedProduct.name}" style="width:250px;margin:5px;">`)
        .join("")}
    </div>
    <p><b>Price:</b> ${selectedProduct.price}</p>
    <p><b>Description:</b> ${selectedProduct.description || "No description available"}</p>
    <p><b>Specifications:</b> ${selectedProduct.specifications || "Not available"}</p>
    <button onclick="addToCart('${selectedCategory}', '${selectedProduct.id}')">Add to Cart</button>
  `;
}

// Page load setup
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("productList")) {
    renderProducts();  
    updateCartCount();
  }
  if (document.getElementById("productDetail")) {
    loadProductDetails();
    updateCartCount();
  }
});
