import { products } from "../JS/product.js";


const container = document.querySelector('.products');

products.forEach(product => {
  const box = document.createElement('div');
  box.classList.add('item_box');
  box.setAttribute('data-id', product.id);
  box.innerHTML = `
    <img class="item" src="${product.image}" alt="${product.name}" />
    <div class="detail">
        <div class="item_details">
            <p class="product_name">${product.name}</p>
            <span class="product_price">$${product.price.toFixed(2)}</span>
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
                <button onclick="addUnit(this)">+</button>
                <span class="unit_value">0</span>
                <button onclick="reduceUnit(this)">-</button>
            </div>
        </div>
        <button class="add_cart">Add to Cart</button>
    </div>
  `;
  container.appendChild(box);
});

// Get cart from localStorage if it exists, or start with an empty object
let Cart = JSON.parse(localStorage.getItem('cart')) || {};

document.querySelectorAll('.add_cart').forEach(button => {

    // for each button attach an event listener
    button.addEventListener('click', function() {

        // find the closest product wrapper to this function
        const productBox = button.closest('.item_box');

        // get the product Id
        const id = productBox.getAttribute('data_id');

        // get the product name from the element with class 'product_name'
        const name = productBox.querySelector('.product_name').textContent;

        // get the product price from the element with class 'produt_price'
        // use parseFloat to convert string to number
        const price = parseFloat(productBox.querySelector('.product_price').textContent);

        // get the unit count 
        const unit = parseInt(productBox.querySelector('.unit_value').textContent);

        // if the product is already in the cart, increase the quantity else, add it as a new item
        if (Cart[id]) {
            Cart[id].quantity += unit ;
        }else {
                Cart[id] = {
                name,      // product name
                price,     // product price
                quantity: unit // how many units the user selected
            };
        }

        // save the updated cart back into local storage
        localStorage.setItem('cart', JSON.stringify(Cart));

        // Optional: Give user feedback
        // alert(`${unit} units of  ${name} have been added to cart!`);
        console.log(Cart);

    });
});