import { sdata, } from './data_26.js';
console.log('sdata', sdata);

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

outputStat1(sdata);

const toSorted = sdata.toSorted(function(a, b) {
    return b - a;
});
console.log('sdata after sorting', sdata);
console.log('toSorted', toSorted);

let stat = {
    pass: 0,
    fail: 0,
    sum: 0,
    average: 0,
};



const outputStat2 = (s) => {
    result1.innerHTML = `
        <h3 class="my-4">Array Statistics</h3>
        <p>toSorted after sorting descending</p>
        <p>${JSON.stringify(s)}</p>
        <p>Total: ${s.length}</p>
        <p>Pass: ${stat.pass}</p>
        <p>Fail: ${stat.fail}</p>
        <p>Highest: ${s[0]}</p>
        <p>Lowest: ${s[s.length - 1]}</p>
        <p>Average: ${stat.average.toFixed(1)}</p>
    `;
};

 const computeStat = (s) =>{
    s.forEach((score) =>{
        if (score > 59.5) stat.pass++;
        else stat.fail++;
        stat.sum += score;
        stat.average = stat.sum / s.length;
    });
 };
computeStat(toSorted);
outputStat2(toSorted);


