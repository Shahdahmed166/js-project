document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => response.json())
      .then(data => {
          displayProducts(data.slice(66, 86));
      })
      .catch(error => console.error("Error fetching the products:", error));

  function displayProducts(products) {
      products.forEach(product => {
          const productElement = document.createElement('div');
          productElement.classList.add('product');
          productElement.innerHTML = `
              <img src="${product.image_link}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p>${product.brand}</p>
              <p>Price: $${product.price}</p>
          `;
          productElement.addEventListener('click', () => {
              localStorage.setItem('selectedProduct', JSON.stringify(product));
              window.location.href = 'single-product.html'; 
          });
          
          productList.appendChild(productElement);
      });
  }
});
var nav = document.querySelector("nav");
var btn = document.querySelector(".btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    nav.classList.remove("navdefault");
    nav.classList.add("navscroll");
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
    nav.classList.remove("navscroll");
    nav.classList.add("navdefault");
  }
});

btn.addEventListener("click", function () {
  window.scrollTo("", 0);
});

const toggle = document.getElementById("modeToggle");
const body = document.body;

toggle.addEventListener("click", function () {
  body.classList.toggle("light-mode");
  this.classList.toggle("active");
});