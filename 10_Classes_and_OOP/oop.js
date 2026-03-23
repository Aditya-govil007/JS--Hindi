// Object lieral-> 


const user={
    username : "aditya",
    password : "123456789@Aditya",
    loggedin : true,

    getuserdetails : function(){ //using iife here will not let the this print the desired output
        // console.log("GOt User Detail from databse");
        // console.log(`Username ${this.username}`);
        // console.log(this);
        
    }
}


// console.log(user.username);

// console.log(user.getuserdetails());
// console.log(this);

// --------------------------------Constructor function---------------------------
 
function User(username,logincount,loggedin){
    this.username=username;
    this.logincount=logincount;
    this.loggedin=loggedin
    return this
    
}


const userone= User("hitesh","12",true)
const usertwo=User("shi","14",true)
console.log(userone.constructor);
// console.log(usertwo);
