// array part II in JS

const marvel_Heros = ["Ironman", "Spiderman", "Thor", "Groot"]
const dc_Heros = ["Batman", "Flash", "Superman"]

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros);

// console.log(marvel_Heros.concat(dc_Heros));
// console.log(...marvel_Heros, ...dc_Heros); //Alternative way of combining array

const anotherArray = [1, 2, 3, [12, 143, 452, [121, 54]], 345, 34]
// console.log(anotherArray.flat());
// console.log(anotherArray.flat(2)); //defining depth in array

const examArray = ["Superman"]
// console.log(Array.isArray(examArray));
// console.log(Array.from("Superman"));
// console.log(Array.from({this:"value", that:"is"}));

let stud_1 = 3414
let stud_2 = 1234
let stud_3 = 3234
let stud_4 = 4541



const newArr = Array.of(stud_1, stud_2, stud_3, stud_4);
console.log(newArr);
console.log(Array.isArray(newArr));


