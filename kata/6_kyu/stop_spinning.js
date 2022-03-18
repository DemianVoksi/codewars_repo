/*
Stop gninnipS My sdroW!
6 Kyu
Javascript
By: xDranik

Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter 
words reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will 
be included only when more than one word is present.
*/

function spinWords(string) {
	let stringArr = string.split(/(\s+)/);
	let spinnedArr = [];

	stringArr.forEach((word) => {
		if (word.length >= 5) {
			wordArr = word.split('');
			wordSpinned = [];

			wordArr.forEach((letter) => {
				wordSpinned.unshift(letter);
			});

			let wordStr = wordSpinned.join('');
			word = wordStr;
			spinnedArr.push(word);
		} else {
			spinnedArr.push(word);
		}
	});

	let finalString = spinnedArr.join('');
	return finalString;
}
