// Sample logic to display orders
const orders = JSON.parse(localStorage.getItem('orders')) || [];
const orderListContainer = document.querySelector('.order-list');

function updateOrdersDisplay() {
    if (orders.length === 0) {
        orderListContainer.innerHTML = '<p>No orders placed yet.</p>';
    } else {
        orderListContainer.innerHTML = orders.map(order => `
            <div class="order-item">
                <h4>Order #${order.id}</h4>
                <p>Total Cost: ₹${order.totalCost}</p>
                <p>Status: ${order.status}</p>
                <h5>Items:</h5>
                <ul>
                    ${order.items.map(item => `<li>${item.name} - Quantity: ${item.quantity}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

}

updateOrdersDisplay();
function addToCart(item, quantity = 1) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = { ...item, quantity };  // Include quantity
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
function calculateTotal(orders) {
    return orders.reduce((total, order) => {
        return total + (order.price * order.quantity);  // Ensure price and quantity are numbers
    }, 0);
}
const item = {
    name: e.target.dataset.name,
    price: parseFloat(e.target.dataset.price),  // Convert price to number
    quantity: 1  // Default quantity
};
orders.forEach((order, index) => {
    const orderDiv = document.createElement('div');
    orderDiv.innerHTML = `
        <h3>Order #${index + 1}</h3>
        <p>Total Cost: ₹${calculateTotal(order.items)}</p>  // Call your total calculation function
        <p>Status: Pending</p>
        <h4>Items:</h4>
        <ul>
            ${order.items.map(item => `<li>${item.name} - Quantity: ${item.quantity}</li>`).join('')}
        </ul>
    `;
    orderContainer.appendChild(orderDiv);
});
