// JavaScript for handling cart and Buy Now functionality
document.addEventListener('DOMContentLoaded', function() {
    const cart = [];

    // Handle Add to Cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            const productPrice = button.getAttribute('data-price');

            const product = {
                name: productName,
                price: parseFloat(productPrice),
                quantity: 1
            };

            // Add to cart array
            cart.push(product);

            // Update cart count
            document.getElementById('cart-count').textContent = cart.length;

            alert(`${productName} has been added to your cart!`);
        });
    });

    // Handle Buy Now
    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-name');
            alert(`Proceeding to buy: ${productName}`);
            // Redirect to the checkout page or buy flow here
        });
    });
});
// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.textContent = cart.length;
}

// Function to add item to the cart
function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Event listeners for Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const item = {
            name: e.target.dataset.name,
            price: e.target.dataset.price
        };
        addToCart(item);
    });
});

// Call this function on page load to set the initial cart count
updateCartCount();
