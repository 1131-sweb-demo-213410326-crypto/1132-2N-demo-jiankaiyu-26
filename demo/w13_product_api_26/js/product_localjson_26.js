// import { _supabase } from './clientSupabase_26.js'  ← 如果不用就删掉

const productContainer = document.querySelector('.products-container');
const url = './api/data-2025530181759.json';

let products_26 = [];

const fetchProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data:', data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const displayProducts = (products) => {
  const productsContent = products
    .map((product) => {
      const { name, price, image } = product.fields;
      return `
        <div class="single-product">
          <img
            src="${image[0].url}"
            class="single-product-img img"
            alt="${name}"
          />
          <footer>
            <h3 class="name">${name}</h3>
            <span class="price">$${(price/100).toFixed(2)}</span>
          </footer>
        </div>
      `;
    })
    .join('');

  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_26 = await fetchProducts(url);
  console.log('products_26:', products_26);
  displayProducts(products_26);
});

