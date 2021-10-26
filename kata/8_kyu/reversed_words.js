/*
Reversed Words
8 Kyu
Javascript
By: jhoffner

Complete the solution so that it reverses all of the 
words within the string passed in. */

function reverseWords(str){
    let reversed = str.split(" ").reverse().join(" ");
    return reversed;
}