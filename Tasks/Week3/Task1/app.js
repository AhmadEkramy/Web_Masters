document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: 'Anker Pods', price: 10, image: 'https://m.media-amazon.com/images/I/61nwtLta29L._AC_SX522_.jpg' },
    { id: 2, name: 'Survival Breclet', price: 15, image: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/424585/1.jpg?1850' },
    { id: 3, name: 'Hugo Watch', price: 20, image: 'https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/247907/1.jpg?2728' },
    { id: 4, name: 'Silver Ring', price: 25, image: 'https://m.media-amazon.com/images/I/51zAgRX3XhL._AC_SY625_.jpg' },
    { id: 5, name: 'Washing Machine', price: 30, image: 'https://m.media-amazon.com/images/I/71CNdP4EohL._AC_SX679_.jpg' },
    { id: 6, name: 'Sonai Kettle', price: 35, image: 'https://m.media-amazon.com/images/I/41FENBHx5qL._AC_SX679_.jpg' },
    { id: 7, name: 'Stand Mixer', price: 40, image: 'https://m.media-amazon.com/images/I/516trEliyXL._AC_SX679_.jpg' },
    { id: 8, name: 'Smart TV', price: 45, image: 'https://m.media-amazon.com/images/I/613Wf6qOWDL._AC_SX679_.jpg' }
  ];

  let cart = [];

  const root = document.getElementById('root');
  const cartElement = document.querySelector('.cart .card-item');
  const totalElement = document.querySelector('.cart .foot h3:last-child');

  const renderProducts = () => {
    root.innerHTML = ''; 
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product', `product-${product.id}`);
      productElement.innerHTML = `
        <img class="pics" src="${product.image}" alt="${product.name}">
        <h3 class="h3-center">${product.name}</h3>
        <p class="h3-center">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
      root.appendChild(productElement);
    });
  };

  const renderCart = () => {
    cartElement.innerHTML = '';
    if (cart.length === 0) {
      cartElement.textContent = 'Your Cart Is Empty';
    } else {
      cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <p>${item.name} x${item.quantity}</p>
          <p>$${(item.price * item.quantity).toFixed(2)}</p>
          <button class="remove-one" data-id="${item.id}">-</button>
          <button class="add-one" data-id="${item.id}">+</button>
        `;
        cartElement.appendChild(itemElement);
      });
    }

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    totalElement.textContent = `$${total.toFixed(2)}`;
  };

  const addToCart = id => {
    const product = products.find(p => p.id === id);
    if (product) {
      const cartItem = cart.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      renderCart();
    }
  };

  const removeFromCart = id => {
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        cart = cart.filter(item => item.id !== id);
      }
      renderCart();
    }
  };

  root.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart')) {
      const id = parseInt(event.target.getAttribute('data-id'));
      addToCart(id);
    }
  });

  cartElement.addEventListener('click', event => {
    if (event.target.classList.contains('remove-one')) {
      const id = parseInt(event.target.getAttribute('data-id'));
      removeFromCart(id);
    }
    if (event.target.classList.contains('add-one')) {
      const id = parseInt(event.target.getAttribute('data-id'));
      addToCart(id);
    }
  });

  renderProducts();
  renderCart();
});
