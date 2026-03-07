// -----------for of----------

// {} , [] , ()

const arr=[1,2,3,4,5]
for(const num of arr){
    // console.log(`value is ${num}`);
    
}

const greeting = 'hello world'
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
    
}

// --------MAPS-------------

const map=new Map()
map.set('IN','India')
map.set('US','United State of America')
map.set('FR','France')
map.set('IN','India')

// console.log(map);
for(const [key,value] of map){
    // console.log(key , ':' , value);
    
}

// const myobject={
//     game1 : 'NFS'
//     game2 : 'valorant'
// }

// for(const [key,value] of myobject){
//     console.log(key, ':', value);
    
// }
// for of loop is not valid on object but is valid on arrays
