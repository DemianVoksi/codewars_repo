/*
6_kyu
Javascript
Array Deep Count
By: hannahcmtucker

You are given an array. Complete the function that returns the 
number of ALL elements within an array, including any nested arrays.
*/

function deepCount(a) {
	let count = 0;
	let deepArray = a;

	function recursiveFunc(initialArray) {
		initialArray.forEach((item) => {
			count++;
			if (typeof item === 'object') {
				recursiveFunc(item);
			}
		});
	}
	recursiveFunc(deepArray);
	return count;
}
