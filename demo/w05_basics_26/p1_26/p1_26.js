// Output:20.00 c=-68.00-F

let c,f;

c=Number(prompt('Enter a temperature in c:')).toFixed(2);
console.log('c',c);
f=(c*9.0)/5+32;const output= `${c} c = ${f} F`;
const result= document.querySelector('.result');
result.textContent = output;