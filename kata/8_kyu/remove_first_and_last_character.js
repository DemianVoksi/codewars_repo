/* 
8 kyu
Javascript
Remove First and Last Character
By: Steadyx

It's pretty straightforward. Your goal is to create a function that 
removes the first and last characters of a string. You're given one 
parameter, the original string. You don't have to worry with strings 
with less than two characters.
*/


function removeChar(str){
  let strNew;
  if (str.length >= 2) {
    strNew = str.slice(1);
    strNew = strNew.slice(0, str.length - 2);
    return strNew;
  } else {
    return str;
  };
};
