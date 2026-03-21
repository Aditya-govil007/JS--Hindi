// fetch("https://www.google.com").then().catch().finally()

// promise->1

const promiseone=new Promise((resolve,reject)=>{
    // do an async tasak
    // db calls, ryptography, network calls
    setTimeout(function(){
        // console.log('Async task is complete');
        resolve()        
    },1000)
})

promiseone.then(function(){
    // console.log('Promise Consumed');
    
})
// promise->2
const secondpromis=new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log('Async task two');
        resolve()
        
    }, 1000);
}).then(()=>{
    // console.log('async 2 resolved');
    
})
// remember to connect resolve with then for making then work and there are two ways stated above.

// promise->3

const promisethree=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username : "Aditya",Email : "aditya@gmail.com"}) 
    }, 1000);
})

promisethree.then((user)=>{
    // console.log(user);
    
})

// promise->4

const promisefourth=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:"Animal", Password: "123"})
        }
        else{
            reject('ERROR: something went wrong')
        }        
    }, 1000);
    
})
promisefourth
.then((user)=>{
    // console.log(user);
    return user.username
    
})
.then((username)=>{ //the username came here from the promise4th return value
    // console.log(username);
})
.catch((error)=>{
    // console.log(error);
})
.finally(()=>{
    // console.log('finally the promise is either resolved or rejected');
    
})

// promise->5

const promisefive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:"Animal", Password: "123"})
        }
        else{
            reject('ERROR: something went wrong')
        }
    })

},1000)

async function consumepromisefive() {
    try{
    const response = await promisefive
    // console.log(response);
    }
    catch(error){
        // console.log(error);
        
    }
}
//  async function does not handle error directly so for that we need to use the catch 
consumepromisefive()

// async function getAllUsers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=response.json()
//         console.log(data);
//     } 
//     catch (error) {
//         console.log(error);
        
        
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.catch((error)=>{
    console.log(error);
    
})
.then((response)=>{
    console.log(response);
    
})