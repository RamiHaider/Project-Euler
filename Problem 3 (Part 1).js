// Problem #3: The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// This will probably be a days long event. I firstly thought that the number I was seeking to find prime factors for was a prime, which actually is impossible
// since a prime is non-factorable (lol). But I continued my journey anyways of creating a prime number generator, its my routine when I learn a new language.
// Anyways there are WAYYY more efficient methods out there, this one works, but its quite awful so far. I haven't looked into the Seive method but I heard it
// makes for efficient primes. Anyways. Part 1 of Question 3.

const primes = [];

for (let x = 3; x < 2000; x += 2) {
    let array = []
    for (let i = 3; i < x; i++) {
        
        
            array.push(x % i)
        
    } if (array.every (value => value !== 0))
    primes.push(x);
    
}

console.log(`there is ${primes.length} primes`)
console.log(primes)
