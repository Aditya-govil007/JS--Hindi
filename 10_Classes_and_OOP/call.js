function setusername(username){
    this.username=username
}
function createuser(username,email,password){
    setusername.call(this,username) // call is important and the syntax too
    this.email=email;
    this.password=password
}
const chai= new createuser("aditya","aditya@gmail.com","aditya@123")
console.log(chai);
