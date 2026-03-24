// this is all after ES6

// const { use } = require("react")

// class user{
//     constructor(username, id , password,dob){
//         this.username=username
//         this.id=id
//         this.password=password
//         this.dob=dob
//     }
//     encryptpassword (){
//         return `${this.password}abc`
//     }
//     changeusername (){
//         return `${this.username.toLowerCase()}`
//     }
// }
// const me= new user("Aditya","aditya@gmail.com","Aditya@123","19/02/2004")
// console.log(me);
// console.log(me.encryptpassword());
// console.log(me.changeusername());


// behind the scene

function user(username,id,password,dob){
    this.username=username
    this.id=id
    this.password=password
    this.dob=dob
}

user.prototype.encryptpassword=function
(){
    return `${this.password} ##`
}

user.prototype.changeusername=function
(){
    return `${this.toUpperCase()} ##`
}

const tea= new user ("Badmosi","Badmosi@badmos.com","MaiNahiBataunga","07-0007")

console.log(tea.changeusername());
console.log(tea.encryptpassword());



