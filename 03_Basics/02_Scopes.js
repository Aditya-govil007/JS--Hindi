// -------------SCOPE->denoted by this =>"{}"------------------
// var c=3000
// this is global scope 
let a=300


// this is local scope
if(true){
    let a=10
    const b =20
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="aditya"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
// one()

if(true){
    const username="aditya"
    if(username==="aditya"){
        const website=" youtube"
        // console.log(username+website);
        
    }
    // console.log(website);
    

    
}
// console.log(username);

// ------------Interesting-------------

console.log(addone(5))
function addone(num){
    return num+1
}


const addtwo= function(num){
    return num+2
}
addtwo(5)