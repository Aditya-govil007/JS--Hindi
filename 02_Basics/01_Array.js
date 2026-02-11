const myArr=[0,1,2,3,4,5,6,7,8,9] // array can be initialised by '[ ]' by these brackets

// const myArr2= new Array(1,2,3,4,5)

// // console.log(myArr);
// // console.log(myArr2);

// //myArr.push(6)
// myArr.unshift(12)
// myArr.shift()
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));
// console.log(myArr);


//-------------SLICE AND SPLICE---------------------//diff is splice manipulate the array but slice does not

console.log("A",myArr);

const myn1=myArr.splice(1,3)

console.log(myn1);
console.log("B",myArr);

