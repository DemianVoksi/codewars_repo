/* 
8 kyu
Javascript
Count by X
By: shums16

Create a function with two arguments that will return an array
of the first (n) multiples of (x).
Assume both the given number and the number of times to count
will be positive numbers greater than 0. Return the results as an array.
*/

function countBy(x, n) {
    var z = [];
    const neo = x;
    z.push(neo);
    for (var i = 0; i < (n - 1); i++) {
	x = x + neo;
	z.push(x);
    }
    return z;
}
