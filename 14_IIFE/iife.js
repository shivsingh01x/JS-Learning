// Immediately Invoked Function Expression (IIFE)


(function chai(){
    //named IIFE
    console.log("DB CONNECTED")
})();
// We have to close IIFE with semicolon; at the end


    //unnamed IIFE
( () => {
    console.log("DB CONNECTED TWO")
} )();

( (name) => {
    //unnamed IIFE with parameter passing
    console.log(`DB CONNECTED TWO ${name}`)
} )("ShivSinghKeer");