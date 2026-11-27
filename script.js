let cartCount = 0;
let totalPrice = 0;

const cartDisplay = document.getElementById("cart-count");
const cartItemsDisplay = document.getElementById("cart-count-display");
const totalDisplay = document.getElementById("cart-total");
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        cartCount++;

        const price = Number(button.dataset.price);
        totalPrice += price;

        cartDisplay.textContent = cartCount;
        cartItemsDisplay.textContent = cartCount;
        totalDisplay.textContent = totalPrice; 

        alert("Product added to cart!");

        console.log("Cart items:", cartCount);
        console.log("Total price: ₹", totalPrice);
    });
});
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = "all";

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();

        const matchesSearch = name.includes(searchValue);
        const matchesCategory =
            selectedCategory === "all" ||
            name.includes(selectedCategory);

        product.style.display =
            matchesSearch && matchesCategory ? "" : "none";
    });
}

searchInput.addEventListener("input", filterProducts);

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        filterProducts();
    });
});
const clearCartButton = document.getElementById("clear-cart");

clearCartButton.addEventListener("click", function () {
    cartCount = 0;
    totalPrice = 0;

    cartDisplay.textContent = 0;
    cartItemsDisplay.textContent = 0;
    totalDisplay.textContent = 0;

    alert("Cart cleared successfully!");
});
const topButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});