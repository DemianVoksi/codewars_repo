/*
Descending Order
7 Kyu
Javascript
By: TastyOs

Your task is to make a function that can take any 
non-negative integer as an argument and return it 
with its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.*/

function descendingOrder(n){
    let arr = Array.from(String(n), Number);
    let sortedArray = arr.sort((a, b) => b - a);
    let joined = Number(sortedArray.join(''));
    return joined;
}