/* 
5 kyu
Javascript
Rot13
By: Rubikan

ROT13 is a simple letter substitution cipher that replaces a letter with the 
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be 
returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".
 */


function rot13(message){
  let messArr = message.split("");
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,:!? ()-+_1234567890";
  const alphabetArr = alphabet.split("");
  let messageIndex = [];
  let newMessageIndex = [];
  let newMessageArr = [];
  let newMessage = "";

  // push index of letter into new array
  messArr.forEach(element => {
    if (alphabetArr.includes(element)) {
      messageIndex.push(alphabetArr.indexOf(element))
    } else {
      console.log("nope")
    }
  });
  
  // apply rot13
  messageIndex.forEach(element => {
    if (element <= 12) {
      newMessageIndex.push(element + 13)
    } else if (element > 12 && element <= 25) {
      newMessageIndex.push(element - 13)
    } else if (element > 25 && element <= 38) {
      newMessageIndex.push(element + 13)
    } else if (element > 38 && element <= 51) {
      newMessageIndex.push(element - 13)
    } else if (element > 51) {
      newMessageIndex.push(element)
    }
  });

  // turn indexes into letters
  newMessageIndex.forEach(element => {
    newMessageArr.push(alphabetArr[element])
  });

  // array to string
  newMessage = newMessageArr.join("")
  
  return newMessage
}