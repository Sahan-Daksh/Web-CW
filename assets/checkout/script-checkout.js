document.addEventListener('DOMContentLoaded', function() {
    initApp();
    
  });

  function initApp(){
    // get data product
    fetch('./assets/shop/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        loadCart();

        // get data cart from memory
        // if(localStorage.getItem('cart')){
        //     cart = JSON.parse(localStorage.getItem('cart'));
        //     addCartToHTML();
        // }
    })
}
  
  function loadCart() {
    var totalPrice = 0;
    var listCartHTML = document.querySelector('.listCart');
    var cart = JSON.parse(localStorage.getItem('cart'));
  
    listCartHTML.innerHTML = ''; // Clear previous cart items
  
    if (cart && cart.length > 0) {
      cart.forEach(item => {
        var newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.dataset.id = item.product_id;
  
        var positionProduct = products.findIndex(value => value.id == item.product_id);
        var info = products[positionProduct];
        listCartHTML.appendChild(newItem);
        newItem.innerHTML = `
          <div class="image">
            <img src="${info.image}">
          </div>
          <div class="name">${info.name}</div>
          <div class="totalPrice">$${info.price * item.quantity}</div>
          <div class="quantity">
            <span class="minus"><</span>
            <span>${item.quantity}</span>
            <span class="plus">></span>
          </div>
        `;
  
        totalPrice += info.price * item.quantity;
      });
    }
  
    var cartAmountElement = document.querySelector('.cartAmount');
    if (cartAmountElement) {
        cartAmountElement.textContent = `Order Total: $${totalPrice}`;
    }
  }

  
  