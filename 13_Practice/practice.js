// +++++++++++++++++++++++++++++++++++++String methods+++++++++++++++++++++++++++++++

// let volvo = "xc90 "
// let oddi = "RS7 "
// console.log(Volvo.toUpperCase());
// console.log(oddi.toLowerCase())
// console.log(Volvo.slice(2))
// console.log(volvo.startsWith("xc"));
// console.log(volvo.endsWith("90"))
// console.log(oddi.length)
// console.log(volvo.replace("x", "X"))
// console.log(volvo.repeat(5), "|", oddi.repeat(5))
// console.log(volvo.search("0"))




// =======================================String Interpolation=============================

// const username = "ShivSinghKeer"
// const skills = "JavaScript, Html, Css, PHP, Python"
// console.log(`The Great Person name is ${username}, and his skills are ${skills}.`)

// More on string interpolation

// const userId = 001
// const userName = "ShivSinghKeer"
// const languageSkills = "Python, HTML, JS, CSS, PHP, Node"
// const company = "Frogiez.Inc"
// const moto = "We love to make awesome"

// console.log(`The Following ID: ${userId} refers to the Username: ${userName}, who has pionered his skills in ${languageSkills} and currently in company ${company} and his organization moto is ${moto}`)




// ==========================================String Indexing============================

// let car = "oddi RS7"
// console.log("length of car:",car.length)
// console.log(car[0])
// console.log(car[1])
// console.log(car[2])
// console.log(car[3])
// console.log(car[4])
// console.log(car[5])
// console.log(car[6])
// console.log(car[7])



// ++++++++++++++++++++++++++++++++++++++| Math in JS |================================

// console.log(Math)
// console.log(Math.abs(-55645)) //returns a positive value of negative value
// console.log(Math.round(454.61))
// console.log(Math.floor(459.94))
// console.log(Math.ceil(459.14))
// console.log(Math.sqrt(25))
// console.log(Math.min(454,3,314554,23,1434,34))
// console.log(Math.max(1234,1234124,13,34,53))

// Playing with Math.random

// console.log(Math.random()*6)
// console.log(Math.round(Math.random()*6))
// console.log(Math.floor(Math.random()*6))
// console.log(Math.ceil(Math.random()*6))

// a formula for fixed output from random btwn two values

// const min = 1
// const max = 6
// console.log(Math.floor(Math.random() * (max - min +1 ) + min))




// ========================================| Nums in JS |==================================

// const marks = 600
// console.log(typeof(marks), marks)

// const balance = new Number(800)
// console.log(typeof(balance), balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

// const presiceNum = 45.4
// console.log(presiceNum.toPrecision(2))

// const thousand = 10005110
// console.log(thousand.toLocaleString('en-in'))




// =====================================| Date in JS |=======================================

// let myBasicDate = Date()
// let myDate = new Date()

// console.log(typeof(myBasicDate), myBasicDate)
// console.log(typeof(myDate), myDate)

// let myDate = new Date()

// console.log("Simple Printing:", myDate)
// console.log("toString:", myDate.toString())
// console.log("toLocaleString:", myDate.toLocaleString())
// console.log(" ")
// console.log("toDateString:", myDate.toDateString())
// console.log("toLocaleDateString:", myDate.toLocaleDateString())
// console.log(" ")
// console.log("toTimeString:", myDate.toTimeString())
// console.log("toLocaleTimeString:", myDate.toLocaleTimeString())
// console.log(" ")
// console.log("toUTCString:", myDate.toUTCString())
// console.log("toISOString:", myDate.toISOString())
// console.log("toJSON:", myDate.toJSON())

// let myCreateDate = new Date(2024, 0, 23)
// let myCreateDate = new Date(2024, 0, 23, 5, 3, 29)
// let myCreateDate = new Date("08-12-2025")
// console.log(myCreateDate.toString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

// console.log(Math.round(Date.now()/1000))

// let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())
// console.log(newDate.getDate())

// newDate.toLocaleString('default', {
//     weekday: "long"
// })