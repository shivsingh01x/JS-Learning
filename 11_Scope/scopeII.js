// scopeII in js function nesting and scope

function one(){
    const username = "ShivSinghKer"

    function two(){
        const email = "thisisemil@gmail.com"
        // console.log(username);
    }
    // console.log(email);
    two()
}

// one()

// scope in if statement

if(true){
    const usernamex = "ShivSinghKeer"
    if  ( usernamex === "ShivSinghKeer"){
        const website = "Youtube "
        // console.log(website + usernamex);
        }
    // console.log(website);
    
}

// console.log(usernamex);


// declaring function inside a var

console.log(addone(8))
function addone(num1){
    return num1 + 1
}

// console.log(declFunct(5));
const declFunct = function(num2){
    return num2 + 2
}

