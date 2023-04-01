/*
Counting sheep... 
8_kyu
Javascript
By: tfKamran

Consider an array/list of sheep where some sheep may 
be missing from their place. We need a function that 
counts the number of sheep present in the array 
(true means present).*/

function countSheeps(arrayOfSheep) {
    num = 0;
    arrayOfSheep.forEach((sheep) => {
        if (sheep === true) {
            num++;
        }
    });
    return num;
}