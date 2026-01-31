let score = undefined

console.log(typeof score)
console.log(typeof (score))

let valueInnumber= Number(score)
console.log(typeof (valueInnumber))
console.log(valueInnumber)


let isloggedIn= "aditya"

let booleanisloggedIn=Boolean(isloggedIn)
console.log(booleanisloggedIn)


let sum=0

let getstring=String(sum)

console.log(getstring)
console.log(typeof getstring)

let str1= "hello"
let str2 =" aditya"

let str3= str1+str2 
console.log(str3)  //this gives op as hello aditya

console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
//above all give op as 12

console.log("1"+"2"+2)//this give O/P as 122
console.log(1+2+"2") //this gies O/P as 32 bcoz the first value is recognised as number then followed by string which gets printed as it is
