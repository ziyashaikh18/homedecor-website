document.addEventListener('DOMContentLoaded', () => {
    const shopping = document.querySelector('.shopping');
    const card = document.querySelector('.card');
    const closeShopping = document.querySelector('.closeShopping');
    const quantity = document.querySelector('.quantity');
    const total = document.querySelector('.total');
    const listCard = document.querySelector('.listCard');

    let items = [
        { id: 1, name: "Decor Combo", price: 5000, quantity: 1 },
        { id: 2, name: "Wooden Vase", price: 1200, quantity: 1 },
        { id: 3, name: "Wall Art", price: 800, quantity: 1 }
    ];

    // Open Cart
    shopping.addEventListener('click', () => {
        card.classList.add('showCart');
        updateCart();
    });

    // Close Cart
    closeShopping.addEventListener('click', () => {
        card.classList.remove('showCart');
    });

    // Update Cart Display
    function updateCart() {
        listCard.innerHTML = '';
        let totalPrice = 0;
        let itemCount = 0;

        items.forEach(item => {
            let listItem = document.createElement('li');
            listItem.innerHTML = `
                ${item.name} - $${item.price} 
                <span class="item-qty">x${item.quantity}</span>
            `;
            listCard.appendChild(listItem);

            totalPrice += item.price * item.quantity;
            itemCount += item.quantity;
        });

        total.innerText = `$${totalPrice.toFixed(2)}`;
        quantity.innerText = itemCount;
    }

    // Initialize Cart
    updateCart();
});
