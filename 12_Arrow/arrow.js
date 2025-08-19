/// how to use this and current contest in js

const user1 = {
    username: "ShivSinghKeer",
    website: "Youtube",

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the ${this.website}`)
        console.log(this)
    }
 
}

// user1.welcomeMessage()
// user1.username = ("Sammu")
// user1.website = ("Facebook")
// user1.welcomeMessage()
// console.log(this)


// we cant use this in function, used in object only
function chai(){
    const username = "ShivSinghKeer"
    console.log(this.username)
}

// chai()

// const thisuser = function(){
//     let usernamexx = "Shiv Singh Keer"
//     console.log(usernamexx)
// }

// thisuser()

// arrow function came later in js in bs6

// const thisuser = () => {
//     let usernamexx = "Shiv Singh Keer"
//     console.log(usernamexx)
// }

// thisuser()

// const newUser = (num1, num2) => {
//     return num1 + num2
// }

// console.log(newUser(5, 2))

// Inpelicit Return
const anotherUser = (num1, num2) => (num1 + num2)

console.log(anotherUser(5, 4))