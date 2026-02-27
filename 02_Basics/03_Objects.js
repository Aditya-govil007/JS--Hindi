// Singleton 
// object ke andar key aur values pair hoti hai
// object literals

// symbol key is added in object by eg-> [mysym]="mykey1"
const mySym= Symbol("Key1")
const JsUser={
    name: "Aditya",
    "full name" : "Aditya Govil",
    age: 22,
    [mySym]:"mykey1",
    location: "lucknow",
    email : "adityagovil2004@gmail.com",
    isLoggedin: false,
    lastloggedin:["Monday","Friday"]
}

console.log(JsUser["email"])
console.log(JsUser.email)
console.log(JsUser["full name"])
console.log(JsUser[mySym]);

JsUser.email="adityagovil2004@gmail.com"
// Object.freeze(JsUser)
JsUser.email="animal@motshot.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log(("Hello Js User"));
    
}
JsUser.greetingtwo=function(){
    console.log((`Hello Js User -> ${this["full name"]}`));
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



