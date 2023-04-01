/*
6 kyu
Javascript
Convert string to camel case
By: jhoffner

Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case). 
The next words should be always capitalized.
*/

function toCamelCase(str) {
	const originalArray = str.split('');
	const secondArray = [];
	originalArray.forEach((item, index) => {
		if (item === '-' || item === '_') {
			let uppered = originalArray[index + 1].toUpperCase();
			originalArray.splice(index, 1);
			secondArray.push(uppered);
		} else {
			secondArray.push(item);
		}
	});
	let joined = secondArray.join('');
	return joined;
}
