import { sdata2 } from './data_26.js';
console.log('sdata2', sdata2);

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

const computePass = (s) => {
    let pass = 0;
    s.forEach((score) => {
        if (score >= 59.9) pass++;
    });
    return pass;
};

const computeFail = (s) => {
    // Fails are those scores below 59.9.
    return s.length - computePass(s);
};

const computeHighest = (s) => {
    let highest = -100;
    s.forEach((score) => {
        if (score > highest) highest = score;
    });
    return highest;
};

const computeLowest = (s) => {
    let lowest = 200;
    s.forEach((score) => {
        if (score < lowest) lowest = score;
    });
    return lowest;
};

const computeAverage = (s) => {
    let sum = 0;
    s.forEach((score) => {
        sum += score;
    });
    return sum / s.length;
};

const outputStat1 = (s) => {
    result1.innerHTML = `
        <h3 class="my-4">Array Statistics</h3>
        <p>sdata original:</p>
        <p>${JSON.stringify(s)}</p>
        <p>Total: ${s.length}</p>
        <p>Pass: ${computePass(s)}</p>
        <p>Fail: ${computeFail(s)}</p>
        <p>Highest: ${computeHighest(s)}</p>
        <p>Lowest: ${computeLowest(s)}</p>
        <p>Average: ${computeAverage(s).toFixed(1)}</p>
    `;
};

outputStat1(sdata2);

