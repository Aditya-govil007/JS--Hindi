const myArr=[0,1,2,3,4,5,6,7,8,9] // array can be initialised by '[ ]' by these brackets

const myArr2= new Array(1,2,3,4,5)

// console.log(myArr);
// console.log(myArr2);

//myArr.push(6)
myArr.unshift(12)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// UNSHIFT- add element to the front of an array
// SHIFT- removes the element from the front of the array

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));
console.log(myArr);

const newarr= myArr.join()
// console.log(newarr);

// JOIN -> gets the array into string and with no brackets.



//-------------SLICE AND SPLICE---------------------//diff is splice manipulate the array but slice does not

console.log("A",myArr);

const myn1= myArr.slice(1,3)

console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);

// SLICE- does not change the array
//SPLICE -  changes the array 





