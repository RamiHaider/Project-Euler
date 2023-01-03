//Problem #4 - A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

//Let's breakt his up into chunks. The code for 'the product of two, 3 digit numbers' is quite easy, it's just a for-loop with every permutation of products
//of numbers between 100 and 999

//Now, lets think about how we will write the code that will determine if a number is symmetric. 
//so, the number 515 is symmetric...
//I was brainstorming ideas and doing a bit of googling, and then it just hit me so amazingly...if the number reversed is the same as the original number Then Symmet!
//okay, good. now how do I reverse a number
//turns out in JS, you can easily reverse strings but not numbers, ok, just have to convert it to a number first
//then there is this 3 step process of. splitting a number, which means putting it into individual components into an array using a method
//then you reverse that array
//then you join the numbers in an array
/then you turn it back into a number from a string

//adding some conditions and inputting a number, it will tell you if it is symmetric or not.

/*

function sym(num) {
    
    
  let numberToString = num.toString();
  let splitNumber = numberToString.split("");
  let reverseNumber = splitNumber.reverse();
  let joinNumbers = reverseNumber.join("");
  let num1 = Number(joinNumbers)
    
    if (num == num1) {
        console.log("Yes, symmetric!")
    } else {
        console.log("Not Symmetric")
    }
    
    
}

sym(51015)

returns //Yes, symmetric!

*/

//now how do we inmbed this into the for-loop with the initial conditions.


/*
pallindromes = [];

function sym() {
    
    for (let num = 10; num <= 9801; num++) {
        let numberToString = num.toString();
        let splitNumber = numberToString.split("");
        let reverseNumber = splitNumber.reverse();
        let joinNumbers = reverseNumber.join("");
        let num1 = Number(joinNumbers)
            if (num == num1) {
                pallindromes.push(num);
            }
        
    }
    console.log(Math.max(...pallindromes));
}
*/

// I thought I was smart by passing the whole product part because, I figured, IF, we know the upper and lower bounds of the sum of products of two 3 digit numbers
// then, I can just use the function I have above (Which finds the range of all Pallindromes between certain numbers
// You see, the question never asked to identify those numbers, just to find the highest number.
//well, the range should be easily between (100 * 100) [Lower Bound] and (999 * 999) [Higher bound]
//Okay, got an answer! 99899

//*
pallindromes = [];

function sym() {
    
    for (let num = 100000; num <= 998001; num++) {
        let numberToString = num.toString();
        let splitNumber = numberToString.split("");
        let reverseNumber = splitNumber.reverse();
        let joinNumbers = reverseNumber.join("");
        let num1 = Number(joinNumbers)
            if (num == num1) {
                pallindromes.push(num);
            }
        
    }
    console.log(Math.max(...pallindromes));
}

sym()

*/

//outputs 99799

//GOT IT!, there is my answer.... or so I thought
//I go to the website to enter my result and it's wrong.. why?
//with insight, I figured that although the range of numbers between those bounds is accurate, that, that number is not necessarily the product of the
//two numbers between 100 and 999. Do you know what I mean?
//Well, remember the question is asking for the largest symmetrical number that is the product of two 3 digit numbers
//99799 may be the largest number possible that is bounded between 999 * 999, but a quick google search reveals that its factors are not two 3 digit numbers
//Okay, no more being lazy, lets just code this properly.
//I just need to create another for-loop nested within my for-loop and then be able to iterate through all the permutations.


//Here is the final code that outputs the correct result


let pallindromes = [];

function sym() {
    
    for (let num1 = 100; num1 <= 999; num1++) {
        for (let num2 = 100; num2 <= 999; num2++) {
                let sum = num1*num2
        
        let numberToString = sum.toString();
        let splitNumber = numberToString.split("");
        let reverseNumber = splitNumber.reverse();
        let joinNumbers = reverseNumber.join("");
        let reversedSum = Number(joinNumbers)
            if (sum == reversedSum) {
                pallindromes.push(sum);
            }
            }
        
    }
    console.log(Math.max(...pallindromes));
}


sym()

//outputs 906609
























