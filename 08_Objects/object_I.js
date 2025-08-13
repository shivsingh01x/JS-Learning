// Objects in js

const Synx = Symbol("key1")
// console.log(typeof(Synx), Synx);

const newObj = {
    name: "ShvSingh",
    age: 19,
    [Synx]: "mykey1",
    location: "Rajgadh",
    email: "Shivm.frogiez@gmail.com",
    isLoggedIn: true
}

newObj.isLoggedIn = false
// newObj.email = "ShivSinghKeer@gmail.com"

// console.log(newObj.email);
// console.log(newObj["email"]);

// console.log(typeof(newObj), ",", typeof(Synx));

newObj.email = "ShivSingh01x@gmail.com"
Object.freeze(newObj) //freezing object :- to prevent the value from Being changed
newObj.email = "ShivSinghKeerx@gmail.com"
// console.log(newObj.email);


// adding function in object

newObj.greeting = function() {
        console.log("Good Morning");
    }

console.log(newObj.greeting());
