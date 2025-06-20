import { products } from "../Data/product.js";

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
                <button class="addUnit">+</button>
                <span class="unit_value">1</span>
                <button class="reduceUnit">-</button>
            </div>
        </div>
        <button class="add_cart">Add to Cart</button>
      </div>
    </div>
  `;
});

// console.log(createElement);

// Render to web page
document.querySelector('.products').innerHTML = createElement;

// Reduce and Add unit buttons
document.querySelectorAll('.addUnit').forEach((button) => {
    button.addEventListener('click', () => {
        
    })
})
document.querySelectorAll('.reduceUnit').forEach((button) => {
    button.addEventListener('click', () => {
        
    })
})

// Add to Cart
document.querySelectorAll('.add_cart').forEach((button) => {
    button.addEventListener('click', () => {
        console.log('Added to CArt!!');
    })
})
