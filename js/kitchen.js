// kitchen.js
document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update cart count
    const updateCartCount = () => {
        cartCountElement.textContent = cart.length;
    };

    // Add product to cart
    const addToCart = (productName, productPrice) => {
        const product = {
            name: productName,
            price: productPrice
        };
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(productName + " added to the cart!");
    };

    // Handle add to cart button clicks
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = parseInt(button.getAttribute("data-price"), 10);
            addToCart(productName, productPrice);
        });
    });

    // Initialize cart count on page load
    updateCartCount();
});
