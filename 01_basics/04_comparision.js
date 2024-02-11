// Comparision in JS

// console.log(2 >  1);    
// console.log(2 >= 1);    
// console.log(2 <  1);    
// console.log(2 == 1);    
// console.log(2 != 1);    

// console.log("2" > 1);
// console.log("02" > 1);

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > is false.
// console.log(null > 0);  // false
// console.log(null == 0); // false 
// console.log(null >= 0); // true

// console.log(undefined == 0); // false
// console.log(undefined > 0);  // false
// console.log(undefined < 0);  // false

// === wil check datatype and also value 
console.log("2" === 2);
