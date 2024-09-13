//  bedroom js 
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');

        // Add product to cart array
        cart.push({ name: name, price: price });
        
        // Update cart count
        document.getElementById('cart-count').innerText = cart.length;
        
        alert(`${name} added to cart!`);
    });
});

document.getElementById('cart-btn').addEventListener('click', () => {
    let cartDetails = cart.map(item => `${item.name}: ₹${item.price}`).join('\n');
    alert(`Your Cart:\n${cartDetails}`);
});