// Nullish Coalescing Opertor (??): null undefined
// it is a new opertor acts as a fall back value 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 60
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("More than 80")

const isBeverage =  "coffee"
isBeverage == "Tea" ? console.log("Let's Have Tea!") : console.log("Let's Have Coffee!")