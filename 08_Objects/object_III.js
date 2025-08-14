// object destructing in js

const newClass = {
    name: "Shivsingh",
    InpecoterClass: "Ya Same!",
    class: 6
}


// console.log(inP);
newClass.InpecoterClass = "DIffeent"
const {InpecoterClass: inP} = newClass //This is called object De-Structuring
// console.log(inP);

// JSON Fomrat

// {
//     "Name": "Ya this is JSON Format",
//     "Class": "6th",
//     "Subject": "PCM"
// }

// JSON format may be inside array

// [
//     {},
//     {},
//     {}
// ]