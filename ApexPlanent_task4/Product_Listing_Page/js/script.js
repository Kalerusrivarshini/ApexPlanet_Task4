
const products = [
  { name: "Smartphone", category: "electronics", price: 299, rating: 4, image: "images/electronics1.jpg" },
  { name: "Laptop", category: "electronics", price: 899, rating: 5, image: "images/electronics2.jpg" },
  { name: "Jeans", category: "fashion", price: 49, rating: 3, image: "images/fashion1.jpg" },
  { name: "Jacket", category: "fashion", price: 89, rating: 4, image: "images/fashion2.jpg" }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += \`
      <div class="product">
        <img src="\${p.image}" alt="\${p.name}">
        <h3>\${p.name}</h3>
        <p>$\${p.price}</p>
        <p>Rating: \${p.rating} stars</p>
      </div>
    \`;
  });
}

document.getElementById("categoryFilter").addEventListener("change", function() {
  const category = this.value;
  let filtered = products;
  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
  }
  displayProducts(filtered);
});

document.getElementById("priceSort").addEventListener("change", function() {
  const sorted = [...products];
  if (this.value === "asc") sorted.sort((a, b) => a.price - b.price);
  if (this.value === "desc") sorted.sort((a, b) => b.price - a.price);
  displayProducts(sorted);
});

document.getElementById("ratingSort").addEventListener("change", function() {
  const sorted = [...products];
  if (this.value === "high") sorted.sort((a, b) => b.rating - a.rating);
  if (this.value === "low") sorted.sort((a, b) => a.rating - b.rating);
  displayProducts(sorted);
});

displayProducts(products);
