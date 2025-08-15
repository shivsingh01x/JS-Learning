// Function Part II with Rest Operator in JS

function calculatorCartPrice(num0, num1){
    return num1
}

// console.log(calculatorCartPrice(2, 2))

// how to use & Pass object in js

// const objExp = {
//     name: "Shiv Singh",
//     class: 6
// }

// function objParent(anyObj){
//     console.log(`This is the ${anyObj.name} and his class is ${anyObj.class}`)
// }

// objParent(objExp)


const userData_1 = {
    name: "Shiv Singh Keer",
    subject: "B.tech Ai&Ds",
    college: "Prashanti Institute of Science & Technology Ujjain",
    contact_info: +917898889303
}
const userData_2 = {
    name: "Om Singh Keer",
    subject: "M.tech Ai&Ds",
    college: "Prashanti Institute of Science & Technology Ujjain",
    contact_info: +918085954574
}

function userDataParent(anyObject){
    console.log(`I am declaring the name of the student is ${anyObject.name} from ${anyObject.college} with contact info ${anyObject.contact_info} and studing in ${anyObject.subject}`)
}

// userDataParent(userData_1)
// userDataParent(userData_2)

// now we will see how to use array and pass in function in js

const userData = [3, 352, 412, 1434]

function userDataFunc(arrayform){
    return arrayform[2]
}

console.log(userDataFunc(userData))
console.log(userDataFunc(["UserData", 34, "dta"]))