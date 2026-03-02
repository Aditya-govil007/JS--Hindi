const user={
    username:"Aditya",
    price: 99,
    
    
    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`);
        // this -> means the current context used for instant and present code
        // console.log(this);
    }
}
// user.welcomeMsg()
// user.username= "Sam"
// user.welcomeMsg()
console.log(this); 
//this gives o/p as empty-{} bcoz it is in node not of function
function chai(){
    
    console.log(this);
    
}

// chai()

const chini =()=> {
    let username= "MINI"
    // console.log(this.username);
    
}

// Arrow function is denoted and doen by -> "( ) => { }"

//--------------------EXPLICIT------------------------- 

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

// -------------------IMPLICIT-------------------------
const addTwo=(num1,num2)=> (num1+num2)
console.log(addTwo(3,4))

// if '{}' then return must be used and for this '()' we dont use return

const myArray=[2,5,3,7,8]