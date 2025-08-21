// truthy values or falsy values

// const userEmail = "Bla"
// const userEmail = ""

// if (userEmail){
//     console.log("User got Email")
// }
// else{
//     console.log("Don't Have any email")
// }

//falsy values
// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// a way to check if arrray is empty of not
// const userEmail = [1]

// if (userEmail.length === 0){
//     console.log("empty")
// }
// else {
//     console.log('has some data')
// }

// a way to check if obj is empty of not
const emptyObj = {
    user: "data"
}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
    
}
else{
    console.log("not empty")
}