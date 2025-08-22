// loops are also called itrations

// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        // console.log("5 is Best Number");
        
    }
    // console.log(element)
}

// console.log(element)


// for loop inside for looop

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
    // console.log(`Innter loop value ${j}, and Outer loop value: ${i}`)
    // console.log(i + '*' + j + ' = ' + i*j);
    } 
}


// for loop with array

let myArray = ["flash", "Batman", "Superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

// break and continue 

// here a example of  break
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5")
        break
    }
    console.log(`value of i is ${index}`)   
}

console.log("new game")
// here a example of continue
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log("Detected 5")
        continue
    }
    console.log(`value of i is ${index}`)   
}