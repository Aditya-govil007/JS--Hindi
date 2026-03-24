const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI=5
// console.log(descriptor);

const badmos={
    name : "aditya",
    quality: "badmosi",
    paisa : "kamana hai"
}

// console.log(Object.getOwnPropertyDescriptor(badmos,"name"));

// Object.defineProperty(badmos,'name',{
//     writable : false,
//     enumerable : false
// })
// console.log(Object.getOwnPropertyDescriptor(badmos,"name"));

for (let [key,value] of Object.entries(badmos)) {
    console.log(`${key} : ${value}`);
    
}