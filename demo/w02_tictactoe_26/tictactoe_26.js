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
  } else {
    container.style.backgroundColor = 'rgba(240,118,128,0.726)';
    alertBox.style.background = 'rgba(240,118,128,0.726)';
    alertBox.style.color = 'green';
    alertBox.style.display = 'block';
    alertBox.textContent = 'Player o wins';
  }
};
const tieMessage = () => {
  alert.style.backgroundColor = '#888';
  alert.style.color = '#ddd';
  alert.style.display = 'block'
  alert.textContent = 'tie';
};

tieMessage();
//winMessage('x');


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