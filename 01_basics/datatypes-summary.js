// JavaScript Master krva mate: JavaScript ni Objects ane Web browsers ni web-events ne master kari nakho etle JavaScript na master


// Documentation: https://262.ecma-international.org/5.1/#sec-11.4.3

//  Primitive dataTypes
// 7 types : String, Number, Boolien, null, undefined, Symbol, BigInt 

const score = 200
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 1215748787878754544567897945n // last me n lagavi daiye etle te BigInt() thai jai che


// Reference (Non Primitive datTypes):  aa datatype ni value ne direct memory ma refrence allocate krva ma ave che 
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "nirmal",
    age:22,
}


const myFucntion = function(){
console.log("Hello world!");
}
myFucntion() // myFunction() typeof is Function aave ane tene kahevai che Object Function



console.log(typeof heros);