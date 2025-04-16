const products = [
  {
    id: 1,
    name: "Fone de Ouvido Bluetooth",
    price: 99.90,
    image: "https://via.placeholder.com/200x150?text=Fone"
  },
  {
    id: 2,
    name: "Notebook Dell Inspiron",
    price: 3999.90,
    image: "https://via.placeholder.com/200x150?text=Notebook"
  },
  {
    id: 3,
    name: "Smartphone Samsung",
    price: 1999.99,
    image: "https://via.placeholder.com/200x150?text=Smartphone"
  }
];

let cartCount = 0;

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart()">Adicionar ao Carrinho</button>
    `;
    container.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

renderProducts();
