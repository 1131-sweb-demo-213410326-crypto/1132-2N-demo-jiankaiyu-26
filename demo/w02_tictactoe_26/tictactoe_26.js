const o = 'o';
const x = 'x';
let turn = 0;
let done = false;

const container = document.querySelector('.container');
const alertBox = document.querySelector('.alert');
const allLi = document.querySelectorAll('.board li');
const resetBtn = document.querySelector('.reset');

console.log(alertBox);
console.log(allLi);

const winMessage = (player) => {
  if (player === 'o') {
    container.style.backgroundColor = 'rgba(144,238,144,0.5)';
    alertBox.style.background = 'rgba(144,238,144,0.5)';
    alertBox.style.color = 'green';
    alertBox.style.display = 'block';
    alertBox.textContent = 'Player o wins';
  } else if (player === 'x') {
    container.style.backgroundColor = 'rgba(240,118,128,0.726)';
    alertBox.style.background = 'rgba(240,118,128,0.726)';
    alertBox.style.color = 'green';
    alertBox.style.display = 'block';
    alertBox.textContent = 'Player x wins';
  }
};

const tieMessage = () => {
  alertBox.style.backgroundColor = '#888';  
  alertBox.style.color = '#ddd';
  alertBox.style.display = 'block';
  alertBox.textContent = 'Tie';
};



const reset = () => {
  alertBox.style.display = 'none';  
  container.style.backgroundColor = '#666';
  allLi.forEach((item) => {
    item.textContent = '+'; 
    item.classList = '';    
  });
};

resetBtn.addEventListener('click', reset);



/*
 <ul class="board">
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
        <li>+</li>
      </ul>

       <ul class="board">
        <li class="o">+</li>
        <li>+</li>
        <li class="x">+</li>
        <li class="o">+</li>
        <li class="x">+</li>
        <li class="x">+</li>
        <li class="o">+</li>
        <li>+</li>
        <li class="o">+</li>
      </ul>


     */ 