// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    
    // For demonstration purposes, we'll just increment the cart count every 2 seconds
    let count = 0;
    setInterval(() => {
        count++;
        cartCount.textContent = count;
    }, 2000);
});
// js for product links
// bedroom.js (similar logic can be applied to outdoor.js, living.js, and kitchen.js)

// Variables to store cart count and total price
let cartCount = 0;
let cartTotal = 0;

// Update cart UI
const updateCartUI = () => {
    document.getElementById('cart-count').textContent = cartCount;
}

// Function to add product to cart
const addToCart = (name, price) => {
    cartCount++;
    cartTotal += parseInt(price, 10);
    alert(`${name} added to cart! Total: ₹${cartTotal}`);
    updateCartUI();
}

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        const productPrice = e.target.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

// "Buy Now" button logic
document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', () => {
        alert('Proceeding to checkout!');
        // You can redirect to a checkout page here
    });
});