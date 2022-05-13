/*
In this exercise, we will be counting the number of vowels that appear in a given string. 
For this exercise, consider the following to be vowels: a, e, i, o, and u.

Instruction
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

*/

const numberOfVowels = function(data) 
{
    // Put your solution here

    let index = 'aeiou';
    let counter = 0;
    for(let i = 0; i < data.length; i++){
      if(index.indexOf(data[i]) >= 0) counter++;
    }
    return counter;
  };
  
  console.log(numberOfVowels("omar")); // 3
  console.log(numberOfVowels("Vancouver Rocks")); // 7
  console.log(numberOfVowels("aeiou")); // 5
