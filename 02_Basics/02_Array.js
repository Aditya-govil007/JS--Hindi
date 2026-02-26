const marvel_heroes=["thor","ironman","spiderman"]
const dc_heores=["superman","flash","batman"]

//marvel_heroes.push(dc_heores)
// console.log(marvel_heroes);

// --------CONCAT-------------

// const all_heores=marvel_heroes.concat(dc_heores)
// console.log(all_heores);


// // -----------------SPREAD OPERATOR------------------

const all_new=[...marvel_heroes,...dc_heores]
// console.log(all_new);


const another_array=[1,2,3,[3,4,5],[5,6,7,[8,9,10]]]
console.log(another_array);


// FLAT- use to give arrat in single form .
const dyn_arr= another_array.flat(Infinity)
console.log(dyn_arr);

console.log(Array.isArray("Aditya"));

// isArray -> check whether the array exsist or not!

console.log(Array.from("Aditya"));
// from-> makes the array of the string
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
//of-> makes the array of scores












