//  this is singleton object
const tinderUser= new Object()
// this is non singleton object 
const tinderUSer2= {}


tinderUser.id="123abc"
tinderUser.username="Adi"
tinderUser.isloggedIn=false

// console.log(tinderUser);

const regularuser={
    email : "some@gmail.com",
    fullname : {
        userfulname:{
            firstname : "Aditya",
            lastname : "Govil"

        }
    }
}

// console.log(regularuser.fullname.userfulname.firstname);

// ---------------Combine the objects-------------

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3= Object.assign({},obj1,obj2)
// add this {} inside assign bcoz this will give sure join of thee objects 

// console.log(obj3);
const obj3={...obj1,...obj2}
console.log(obj3);

// ...->is a spread function it combines the objects as well as array 

const user=[
    {
        id:1,
        email : "h@gmail.com"
    },
    {
        id:1,
        email : "h@gmail.com"
    },
    {
        id:1,
        email : "h@gmail.com"
    },
    {
        id:1,
        email : "h@gmail.com"
    },

]
console.log(user[1].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));

