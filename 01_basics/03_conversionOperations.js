/* aa sena mate che ke jyare FrontEnd mathi BackEnd ma value aave ane te value 
type 6u che te confution dur krvanu che
*/

let score = "33"
// console.log(typeof score); // OR
// console.log(typeof(score));

/* variable ma store kareli stirng value ne number ma convert krva mate 
Number() method no use thai che
*/
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);


/* jyare variable ma string sathe number hoi tyare confution dur krvanu che */

let matchScore = "33abcd"
let valueScoreNumber = Number(matchScore)
// console.log(typeof valueScoreNumber);
// console.log(valueScoreNumber); // ahi log aav6e NaN means Not A Number

// NaN is also special type in JS

let mathScore = null
let valueMathNumber = Number(mathScore)
// console.log(typeof valueMathNumber);
// console.log(valueMathNumber); // ahi log aav6e O means mathScore ni value null define che


let mathsScore = undefined
let valueMathsNumber = Number(mathsScore)
// console.log(typeof valueMathsNumber);
// console.log(valueMathsNumber); // ahi log aav6e NaN means not a number aav6e

let mathScores = true
let valueMathNumbers = Number(mathScores)
// console.log(typeof valueMathNumbers);
// console.log(valueMathNumbers); // ahi log aav6e 1 means aapde matchScores ne boolean apiyu che temj jo 0 joi to output false aav6e


// Notes
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // ahi apdne true output mlse kem ke aapde convert boolean ma kriye chiye

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
// 33 => "33"

