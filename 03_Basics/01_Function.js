

function saymyname(){
    // console.log("A");
    // console.log("D");
    // console.log("I");
    // console.log("T");
    // console.log("Y");
    // console.log("A");
}

saymyname()

function addtwonumber(num1,num2){
    let result=num1+num2;
    return result    

}
const result=addtwonumber(2,9)

//  console.log("Result : ",result);

function loginuser(username){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginuser("Aditya"))
// console.log(loginuser(""))
// console.log(loginuser())

// ---------REST AND SPREAD OPERATOR IS DENOTED BY (...)---------------


function calculatecartPrice(val1,val2,...num1){
    // this is rest operator
    return num1
} 
// console.log(calculatecartPrice(200,400,600,800));

const user={
    username : "Aditya",
    price: 199
}

function handleobject(anyobject){
    console.log(`Usernames is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleobject(user);
handleobject({
    username:"Sam",
    price :399
});

