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
