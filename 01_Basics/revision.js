// Primitive

// Datatype - number,string,null, undefined, symbol, BigInt




const score = 100
console.log(typeof score)


//Non Primitive or Reference


//Array [], Objects{},Function

const heroes=['hulku','iron man','thor'];
let myobj={
    name: 'aditya',
    age: 22
}
const myfunction = function (){
    console.log("hello world")
}



// memory { stack memory ,heap memory }

// stack is used in primitive

// heap is used in non primitive

let myytname= "animaldevil.com"

let anothername="game with devil"

console.log(myytname)
console.log(anothername)

let user={
    email:"xyz@gmail.com",
    upi:"xyz@ibl"
}
let user2= user
user2.email="animal@gmail.com"

console.log(user.email)
console.log(user2.email)
