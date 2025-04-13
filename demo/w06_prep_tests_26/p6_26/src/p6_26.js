import menu_26 from './data_26.js';
console.log('menu_26', menu_26);

const section = document.querySelector('.section-center');

const displayMenu_26 = () => {
    const menuInfo = menu_26.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return `
            <article class="menu-item">
              <img src="${img}" alt="${title}" class="photo" />
              <div class="item-info">
                <header>
                  <h4>${title}</h4>
                  <h4 class="price">${price}</h4>
                </header>
                <p class="item-text">
                 ${desc}
                </p>
              </div>
            </article>
        `;
    }).join('');

    console.log('menuInfo', menuInfo);
    section.innerHTML = menuInfo;
};

window.addEventListener('DOMContentLoaded', () => {
    displayMenu_26();
});
