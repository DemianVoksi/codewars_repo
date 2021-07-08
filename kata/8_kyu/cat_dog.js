// 8 kyu

// Javascript

// Cat years, Dog years

// By: dinglemouse

// I have a cat and a dog.

// I got them at the same time as kitten/puppy.
// That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears > 2) {
	catYears = ((humanYears - 2) * 4) + 24;
	dogYears = ((humanYears - 2) * 5) + 24;
    } else if (humanYears == 2) {
	catYears = 24;
	dogYears = 24;
    } else {
	catYears = 15;
	dogYears = 15;
    }

  return [humanYears, catYears, dogYears];
}
