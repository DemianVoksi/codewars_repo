/* 

8 kyu
Javascript
Get the mean of an array
By: AzariasB

It's the academic year's end, fateful moment of your school
report. The averages must be calculated. All the students
come to you and entreat you to calculate their average for them.
Easy! You just need to write a script.
Return the average of the given array rounded down to its
nearest integer. The array will never be empty.
*/

function getAverage(marks) {
    var len = marks.length;
    var sum = marks.reduce((a, b) => a + b, 0);
    var avg = sum / len;
    if (typeof avg != "integer") {
	avg = Math.floor(avg);
    }
    return avg;
}
