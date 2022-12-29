// Question: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

let fibArr = [1,1];
let evenFibArr = [];
let answer = 0;
 
 
//populating the array "fibArr" with the first 100 terms in the Fib Sequence
for (i = 0; i < 100; i++) {
  fibArr.push(fibArr[i] + fibArr[i + 1]);
} 
 
//creating a new array "updatedFibArr" that only contains the values less than 4 million 
const updatedFibArr = fibArr.filter(num => num <= 4000000);
 
 
//pushing all of the values that are even to a new array called "evenFibArr"
for (const values of updatedFibArr) {
  if (values % 2 == 0) {
    evenFibArr.push(values)
  }
}
 
//summing all the values in "evenFibArr" into a variable called "answer"
for (const values1 of evenFibArr) {
    answer += values1;
}
 
console.log(answer)
