/*
6 kyu
Javascript
Create Phone Number
By: xDranik

Write a function that accepts an array of 10 integers 
(between 0 and 9), that returns a string of those numbers 
in the form of a phone number.
*/

function createPhoneNumber(numbers){
  let parenthesis = numbers.splice(0, 3);
  let beforeDash = numbers.splice(0, 3);
  let afterDash = numbers.splice(0, 4);
  let phoneNumber = "(" + parenthesis.join("") +
  ")" + " " + beforeDash.join("") + 
  "-" + afterDash.join("");
  return phoneNumber
}