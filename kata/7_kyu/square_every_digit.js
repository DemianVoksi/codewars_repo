// 7 kyu

// Javascript

// Square Every Digit

// By: MysteriousMagenta

// Welcome. In this kata, you are asked to square every digit
// of a number and concatenate them. For example, if we run 9119
// through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer.

function squareDigits(num){
    var arr2 = [];
    var squared;
    var arr = Array.from(String(num), Number);
    for (i = 0; i < arr.length; i++) {
    	squared = arr[i] * arr[i];
    	arr2.push(squared);
    }
    arr2 = Number(arr2.join(""));
    return arr2;
}
