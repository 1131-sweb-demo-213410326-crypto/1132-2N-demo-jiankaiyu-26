import { tours_26 } from "./data_26.js";
console.log('tours_26', tours_26);

const section = document.querySelector('.section-center');

const displayTours_26 = () => {
    const toursInfo = tours_26.map((tour) => {
        return `
          <article class="single-tour">
            <img src=${tour.img} alt=${tour.name} />
            <footer>
              <div class="tour-info">
                <h4>${tour.name}</h4>
                <h4 class="tour-price">$${tour.price}</h4>
              </div>
              <p>
              ${tour.info}</button>read more</button>
              </p>
              <button class="delete-btn">not interested</button>
            </footer>
          </article>
        `;
    }).join('');
    section.innerHTML = toursInfo;
};

window.addEventListener('DOMContentLoaded', () => {
    displayTours_26();
});


