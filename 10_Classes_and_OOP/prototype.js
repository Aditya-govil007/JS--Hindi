let myname= "aditya      "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
}
// console.log(myname.trim().length);






// inheritance

const User={
    name :"Aditya",
    class : "4th year"
}
const teacher={
    makevideo : true

}

const assistant={
    available : true
}

const TAsupport={
    makeassignment : 'Js assignment',
    fulltime : true ,
    __proto__ : assistant
}

teacher.__proto__ = User

// Modern syntax

Object.setPrototypeOf(teacher,assistant)

"aditya".truelength()
"aaditya        ".truelength()
