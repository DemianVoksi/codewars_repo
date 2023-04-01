/*
6 Kyu
Multiples of 3 and 5
By: jhoffner

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
Courtesy of projecteuler.net (Problem 1)
*/

function solution(number) {
	let multiplesOfThree = [];
	let multiplesOfFive = [];
	let threeReduced;
	let fiveReduced;

	for (let i = 1; i < number; i++) {
		if (i % 3 === 0) {
			multiplesOfThree.push(i);
		}
		if (i % 5 === 0 && !multiplesOfThree.includes(i)) {
			multiplesOfFive.push(i);
		}
	}

	if (multiplesOfThree.length == 0) {
		threeReduced = 0;
	} else {
		threeReduced = multiplesOfThree.reduce((a, b) => a + b);
	}

	if (multiplesOfFive.length == 0) {
		fiveReduced = 0;
	} else {
		fiveReduced = multiplesOfFive.reduce((a, b) => a + b);
	}

	let added = threeReduced + fiveReduced;

	if (added < 0) {
		return 0;
	} else {
		return added;
	}
}
