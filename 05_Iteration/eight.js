const array=[1,2,3,4]
// reduce function
const mytotal=array.reduce((acc,currval)=>{
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc+currval;
    
},3)
console.log(`mytotal: ${mytotal}`);
