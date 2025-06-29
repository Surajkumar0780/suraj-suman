const products = [
    { id: 1, name: "Smartphone", price: 14999, image: "https://via.placeholder.com/200x150?text=Phone" },
    { id: 2, name: "Laptop", price: 49999, image: "https://via.placeholder.com/200x150?text=Laptop" },
    { id: 3, name: "Headphones", price: 2999, image: "https://via.placeholder.com/200x150?text=Headphones" },
    { id: 4, name: "Watch", price: 1999, image: "https://via.placeholder.com/200x150?text=Watch" },
];

let cartCount = 0;

function renderProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(card);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

window.onload = renderProducts;
