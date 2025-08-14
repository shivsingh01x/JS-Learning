// Creating Functions in js


function saymyName(){
    console.log("S")
    console.log("h")
    console.log("i")
    console.log("v")
    console.log("S")
    console.log("i")
    console.log("n")
    console.log("g")
    console.log("h")
    console.log("K")
    console.log("e")
    console.log("e")
    console.log("r")
}

// saymyName()

// creating a function to add two numbers

function addtwoNum(num1, num2){ //here num1, num2 are parameters
    console.log(num1 + num2);
    }

addtwoNum(5, 2) //here 5, 2 are arguments

// using return in function to break the program at a point

// function userData(namex){
//     if(namex === undefined){
//         console.log("Please enter a user name");
//         return      
//     }
//     return `${namex} is logged in the form`
// }

// console.log(userData("f"))


// function userData(namex){
//     if(!namex){
//         console.log("Please enter a user name");
//         return      
//     }
//     return `${namex} is logged in the form`
// }

// console.log(userData())

function userData(namex = "Samu"){
    if(!namex){
        console.log("Please enter a user name");
        return      
    }
    return `${namex} is logged in the form`
}

console.log(userData("Ramu"))
