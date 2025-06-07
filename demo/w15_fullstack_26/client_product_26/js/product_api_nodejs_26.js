const productContainer = document.querySelector('.products-container');
// ← 这里改成 127.0.0.1:3000
const API_URL = 'http://127.0.0.1:3000/api/product_26';

async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      console.error('API 返回状态：', res.status);
      return [];
    }
    return await res.json();
  } catch (err) {
    console.error('拉取接口失败：', err);
    return [];  // 兜底空数组，防止 .map 报错
  }
}

function displayProducts(products = []) {
  productContainer.innerHTML = products
    .map(p => `
      <div class="single-product">
        <img src="${p.remote_img||p.img.replace(/^\.\//,'/')}" alt="${p.title}" class="single-product-img"/>
        <footer>
          <h3>${p.title}</h3>
          <span>$${p.price.toFixed(2)}</span>
        </footer>
      </div>
    `)
    .join('');
}

document.addEventListener('DOMContentLoaded', async () => {
  const products = await fetchProducts();
  console.log('products:', products);
  displayProducts(products);
});


