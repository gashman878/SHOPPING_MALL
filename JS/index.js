import { products } from "../Data/product.js";
import { cart } from "../Data/cart.js";



let createElement = '';
products.forEach((products) => {
    createElement  += `
    <div class="item_box">
        <img class="item" src="${products.image}" alt="${products.name}" />
        <div class="detail">
            <div class="item_details">
                <p class="product_name">${products.name}</p>
                <span class="product_price">$${products.price.toFixed(2)}</span>
            </div>
            <div class="item_details">
                <p class="product_name">Size:</p>
                <select class="product_size">
                    <option value="large">L</option>
                    <option value="xlarge">XL</option>
                    <option value="xxlarge">XXL</option>
                </select>
            </div>
            <div class="item_details">
                <p class="product_name">Unit:</p>
                <div class="unit_span">
                    <button class="addUnit" data-product-id="${products.name}">+</button>
                    <span class="unit_value">${products.quantity}</span>
                    <button class="reduceUnit" data-product-id="${products.name}">-</button>
                </div>
            </div>
            <button class="add_cart" data-products-name="${products.name}">Add to Cart</button>
        </div>
    </div>
  `;
});
// Render to web page
document.querySelector('.products').innerHTML = createElement;


// Parent element where events will bubble up
document.querySelector('.products').addEventListener('click', (e) => {
  const target = e.target;

  // Handle "+" button
  if (target.classList.contains('addUnit')) {
    const productId = target.dataset.productId;
    const product = products.find(p => p.name === productId);
    product.quantity++;  // Update the product's quantity
    target.nextElementSibling.textContent = product.quantity;  // Update the displayed value
  }

  // Handle "-" button
  if (target.classList.contains('reduceUnit')) {
    const productId = target.dataset.productId;
    const product = products.find(p => p.name === productId);
    if (product.quantity > 1) {
      product.quantity--;  // Prevent going below 1
      target.previousElementSibling.textContent = product.quantity;
    }
  }
});

// Add to Cart
document.querySelector('.products').addEventListener('click', (e) => {
  if (e.target.classList.contains('add_cart')) {
    const productName = e.target.dataset.productsName;
    const product = products.find(p => p.name === productName);
    const button = e.target;
    const size = button.closest('.item_box').querySelector('.product_size').value;
    const quantity = product.quantity;

    // check if a product already exits in Cart.
    let check = cart.some(cartItem => Object.values(cartItem).includes(productName) && Object.values(cartItem).includes(size));
    
    if (check) {
      let cartQuantity = cart.find(numbers =>  Object.values(numbers).includes(productName) && Object.values(numbers).includes(size));
      cartQuantity.quantity += quantity;
      console.log(cart);
    } else {
      cart.push({
        name: productName,
        Size: size,
        quantity: quantity,  
        price: product.price.toFixed(2),
        image: product.image
      });
      console.log(cart);
      console.log(cart.length);
    }

    
    
  }

});
