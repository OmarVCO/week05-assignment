/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function(data) 
{
        // Put your solution here

    let first = data[0];
    let second = data[1];
  
    if(first > second) {
      first = data[0];
      second = data[1];
    } else {
      second = data[0];
      first = data[1];
    }
  
    for(let i = 2; i < data.length; i++){
      if(data[i] > first) {
        second = first;
        first = data[i];
      }
    }
    return first + second;
  }
    
console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126