// outdoor.js
document.addEventListener("DOMContentLoaded", function () {
    const cartCountElement = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }

    function addToCart(productName, productPrice) {
        const product = {
            name: productName,
            price: productPrice
        };
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = button.getAttribute("data-name");
            const productPrice = parseInt(button.getAttribute("data-price"), 10);
            addToCart(productName, productPrice);
            alert(productName + " added to the cart!");
        });
    });

    updateCartCount();
});
