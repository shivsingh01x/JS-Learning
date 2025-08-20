// IF Statement

// const IsUserLoggedIn = true

// if (IsUserLoggedIn){
//     console.log("First Programm of IF Statement")
// }
// else{
//     console.log("Code Excuted")
// }

// < , > , <= , >= , == , === , && , || , != , !==

// if ( 1 >= 2 && 2 == 2){
//     console.log("Checking Alpha")
// }
// else{
//     console.log("Else Executed")
// }

// const score = 200

// if (score > 200){
//     const power = "fly"
//     console.log(`The user can ${power}`)
// }
// else{
//     console.log("Better Luck Nxt Time")
// }
// console.log(`The user can ${power}`)


// const balance = 500

// if ( balance > 400 ) console.log("You have Good Balance");
// if (  balance > 400 ) console.log("You have Good Balance"), console.log("this is twice of it");

// using if else if and else

const currentBalance = 250

if ( currentBalance > 50 && currentBalance < 100 ){
    console.log(`Your balance is btwn 50 and 100 & the amount is ${currentBalance}`)
}
else if ( currentBalance > 100 && currentBalance < 200 ){
    console.log(`Your balance is btwn 100 and 200 & the amount is ${currentBalance}`)
}
else if ( currentBalance > 200 && currentBalance < 300 ){
    console.log(`Your balance is btwn 200 and 300 & the amount is ${currentBalance}`)
}
else{
    console.log(`All above conditions are not matched & your amount is ${currentBalance}`)
}