// Cart functionality
let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const book = button.parentElement;
    const title = book.querySelector('h3').innerText;
    const price = parseFloat(book.querySelector('p').innerText.replace('$', ''));

    cart.push({ title, price });
    total += price;

    updateCart();
  });
});

function updateCart() {
  const cartItems = document.querySelector('.cart-items');
  const totalElement = document.getElementById('total');

  // Clear cart items
  cartItems.innerHTML = '';

  // Add new items
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <span>${item.title}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;
    cartItems.appendChild(cartItem);
  });

  // Update total
  totalElement.innerText = total.toFixed(2);
}