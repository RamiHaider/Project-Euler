// so I created a code that will find the prime factors of a given number.....BUT it only works for up to 5 billion. It just means that I need to make the code more
// efficient.


// Lets create a prime factorization function

let array = [];
let furtherArray = [];
let x = 98763

//first lets create a factorization function
//i.e., break down input number into factor constituents
function factor(x) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            array.push(i)
        }
    }
}

//check whether the numbers in the arrays are factors of
//more essential factors
function checkFactors() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[j] % array[i] === 0) {
        furtherArray.push(array[j]);
      }
    }
  }
}

//removes non-essential factors and only keeps primes.
function removeDuplicates( ) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!furtherArray.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}


factor(x);
checkFactors()
const result = removeDuplicates(array, furtherArray);
console.log(`The prime factors of ${x} are ${result}`);


//outputs: The prime factors of 98763 are 3,7,4703
