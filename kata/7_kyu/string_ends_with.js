/*
7 kyu
Javascript
String ends with?
By: jhoffner

Complete the solution so that it returns true if the first
argument(string) passed in ends with the 2nd argument 
(also a string). 
*/

function solution(str, ending){
  if (str.slice(-ending.length) == ending) {
    return true;
  } else if (ending == '') {
    return true;
  } else {
    return false;
  }
}