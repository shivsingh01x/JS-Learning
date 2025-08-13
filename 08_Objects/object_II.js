// part II On Objects in JS

// const tinderx = new Object() //this is single ton object
// const tinderx2 = {} //this is non-single ton object

// console.log(typeof(tinderx), tinderx);
// console.log(typeof(tinderx2), tinderx2)




const tinderUser = {}
tinderUser.iD = "User01x"
tinderUser.name = "ShivSinghKeer"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

// object inside object

const newobjx = {
    name: "SammySins",
    class: {
        lkg: "Sammy",
        ukg: "Sins"
    }
}

// console.log(newobjx);
// console.log(newobjx.class);
// console.log(newobjx.class.lkg);

const obj1 = {
    name1: "obj1singh"
}
const obj2 = {
    name2: "obj2singh"
}
const obj3 = {
    name3: "obj3singh"
}

// const objparent = {obj1, obj2, obj3}
// const objparent = {...obj1, ...obj2, ...obj3}
const objparent = Object.assign({}, obj1, obj2, obj3)
// console.log(objparent)

const users = [
    {
        user1: "myuser1",
        email1: "myemail1"

    },
    {
        user2: "myuser2",
        email2: "myemail2"

    },
    {
        user3: "myuser3",
        email3: "myemail3"

    }
]

// console.log(typeof(users), users[0].email1);

// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



