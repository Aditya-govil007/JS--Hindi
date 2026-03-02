// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)-()()

(function chai(){
    console.log("DB Connected")
    
})();

// Global scope ke pollution ko hatane ke liye IIFE use krte hai


(( )=>{
    console.log("DB Connected too");
    
}
)()