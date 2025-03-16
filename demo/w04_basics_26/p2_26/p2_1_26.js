import { sdata } from './data_26.js';
console.log('sdata', sdata);

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

const outputStat1 = (s) => {
    result1.innerHTML = `
        <h3 class="my-4">Array Statistics</h3>
        <p>sdata original:</p>
        <p>${JSON.stringify(s)}</p>
        <p>Total: 6</p>
        <p>Pass: 4</p>
        <p>Fail: 2</p>
        <p>Highest: 100</p>
        <p>Lowest: 20</p>
        <p>Average: 65.2</p>
    `;
};

outputStat1(sdata);
