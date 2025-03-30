import { students, } from './data_26.js';
console.log('students', students);

let stat = {
    pass: 0,
    fail: 0,
    sum: 0,
    average: 0,
    highest: -100,
    lowest: 200,
};

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

const resetStat = () => {
    stat.pass = 0;
    stat.fail = 0;
    stat.sum = 0;
    stat.average = 0;
    stat.highest = -100;
    stat.lowest = 200;
};

const computeStat = (s) => {
    resetStat();
    s.forEach((item) => {
        if (item.score > 59.5) stat.pass++;
        else stat.fail++;
        stat.sum += item.score;
        stat.average = stat.sum / s.length;
    });
};

const computePass = (s) => {
    return stat.pass;
};

const computeFail = (s) => {
    return stat.fail;
};

const computeAverage = (s) => {
    return stat.average;
};

const computeHighest = (s) => {
    stat.highest = -100;
    s.forEach((item) => {
        if (item.score > stat.highest) stat.highest = item.score;
    });
    return stat.highest;
};

const computeLowest = (s) => {
    stat.lowest = 200;
    s.forEach((item) => {
        if (item.score < stat.lowest) stat.lowest = item.score;
    });
    return stat.lowest;
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

const outputStat2 = (s, isSort, result) => {
    const resultText = `
        <h3 class="my-4">Array Statistics for ${
            result === 'result1' ? 'result1' : 'result2'
        }</h3>
        <p>After sorting descending</p>
        <p>${JSON.stringify(s)}</p>
        <p>Total: ${s.length}</p>
        <p>Pass: ${stat.pass}</p>
        <p>Fail: ${stat.fail}</p>
        <p>Highest: ${isSort === true ? s[0].score : computeHighest(s)}</p>
        <p>Lowest: ${isSort === true ? s[s.length - 1].score : computeLowest(s)}</p>
        <p>Average: ${stat.average.toFixed(1)}</p>
    `;
    if (result === 'result1') {
        result1.innerHTML = resultText;
    } else if (result === 'result2') {
        result2.innerHTML = resultText;
    }
};

// Compute statistics for original students
computeStat(students);
outputStat1(students);

// Sort students by score in descending order
const toSorted = students.toSorted((a, b) => b.score - a.score);
console.log('after sorting', students);
console.log('toSorted', toSorted);

// Compute statistics for sorted students
computeStat(toSorted);
outputStat2(toSorted, true, 'result2');




