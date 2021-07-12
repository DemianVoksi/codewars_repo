/* 

8 kyu
Javascript
The Wide-Mouthed frog!
By: nbeck

Your goal in this kata is to create complete the mouth_size method
this method take one argument animal which corresponds to the animal
encountered by frog. If this one is an alligator (case insensitive)
return small otherwise return wide.
*/

function mouthSize(animal) {
    if (animal == "alligator" || animal == "ALLIGATOR")
	return "small";
    else
	return "wide";
}

console.log(mouthSize("alligator"));
console.log(mouthSize("dog"));
