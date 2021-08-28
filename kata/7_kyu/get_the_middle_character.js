/* 
7 kyu
Javascript
Get the Middle Character
By: Shivo 

You are going to be given a word. Your job is to return 
the middle character of the word. If the word's length is 
odd, return the middle character. If the word's length is 
even, return the middle 2 characters.
 */

function getMiddle(s) {
  if (s.length % 2 == 0) {
    let middlePosition2 = (s.length / 2) + 1;
    let middlePosition1 = middlePosition2 - 2;
    let middle = s.slice(middlePosition1, middlePosition2);
    return middle

  } else if (s.length % 2 != 0) {
    let middle1 = Math.floor(s.length / 2);
    let middle = s[middle1];
    return middle 
  }
}