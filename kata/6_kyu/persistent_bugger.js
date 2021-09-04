/*
6 kyu
Javascript
Persistent Bugger.
By: joh_pot

Write a function, persistence, that takes in a positive 
parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits 
in num until you reach a single digit.
*/

function persistence(num) {
  let counter = [];
  let usableNum = num;

  while (usableNum > 9) {
    let numFunction = usableNum => Number(usableNum);
    let numArray = Array.from(String(usableNum), numFunction);
    let sumArray = numArray.reduce((a, b) => a * b);
    counter.push(sumArray);
    usableNum = sumArray;
  }
  return counter.length
}