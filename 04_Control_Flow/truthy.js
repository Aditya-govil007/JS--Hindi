const user=""

if(user)
    {
    console.log("has email");
    
}
else{
    console.log("Dont have email");
    
}

// falsy value-> 
// false , 0 , -0 , BigInt 0n , " ", null , undefined , NaN

// Truthy value->
// true , 1 , "0"(this is truthy value bcoz it is inside string ),"false" ( similiar this is also )," " , [] , {},function(){}


if(user.length ===0){
    // console.log("Empty array");
    
}

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    // console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1=null ?? 5
val2=undefined ?? 5
val3=15 ?? 5
val4=15 ?? 5 ?? null

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);


// Terniary operator->

// Condition? true : false

const iceteaprice = 100
iceteaprice <=90 ? console.log("less than 90") : console.log("more than 90");

