// Sample logic to manage the cart
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsContainer = document.querySelector('.cart-items');
const totalItemsElement = document.getElementById('total-items');
const totalCostElement = document.getElementById('total-cost');

function updateCartDisplay() {
    let totalItems = 0;
    let totalCost = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>No items in your cart yet.</p>';
    } else {
        cartItemsContainer.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <h4>${item.name}</h4>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        `).join('');
        
        cartItems.forEach(item => {
            totalItems += item.quantity;
            totalCost += item.price * item.quantity;
        });
    }

    cartCountElement.textContent = totalItems;
    totalItemsElement.textContent = totalItems;
    totalCostElement.textContent = totalCost;
}

updateCartDisplay();

// Handle checkout button click
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cartItems.length > 0) {
        // Example: Add an order and clear the cart
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const order = {
            id: orders.length + 1,
            items: cartItems,
            totalCost: totalCostElement.textContent,
            status: 'Pending',
        };
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.setItem('cart', JSON.stringify([])); // Clear the cart
        alert('Checkout successful! Your order has been placed.');
        updateCartDisplay();
    } else {
        alert('Your cart is empty!');
    }
});
