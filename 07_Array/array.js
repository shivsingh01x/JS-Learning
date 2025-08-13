// array in js

const myArr = [1,2,3,4]
const myHeros = ["MadanSinghKeer", "BheruSinghKeer", "ShivSinghKeer", "OmSinghKeer"]

// console.log("myArr:- ", myArr);
// console.log("myHeros:- ", myHeros);

// array methods

const myArr3 = [1,2,3,4,5,6,7,8,9]
// console.log("myArr3:- ",myArr3);
// console.log("Length of myArr3:- ",myArr3.length);
// myArr3.push(3)
// myArr3.pop()
// myArr3.unshift(9)
// myArr3.shift()

//Dev Note*- push is used to add element at the last of array, vice-versa unshift.
//Dev Note*- pop is used to remove last element of array, vice-versa shift.


// console.log("myArr3:- ",myArr3);
// console.log("Length of myArr3:- ",myArr3.length);

// console.log(myArr3.includes(9));
// console.log(myArr3.indexOf(9));

// slice and splice

const myNewArr = [1,2,3,4,5,6,7,8,9]

console.log(myNewArr);
console.log("Slice:- ",myNewArr.slice(0,3)); //it only shows a copy of an array
console.log(myNewArr);
console.log("Splice:- ",myNewArr.splice(0,5)); //it removes elements from an array
console.log(myNewArr);


