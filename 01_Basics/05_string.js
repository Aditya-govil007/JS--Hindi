const name= "Aditya"
const repoCount= 1

//console.log(name+repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//used ` and ${}

const gamename= new String ("Animal Devil")

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);//gives length of the string

console.log(gamename.toUpperCase());// converts to upper case

console.log(gamename.charAt(2));//enter number inside charAt

console.log(gamename.indexOf("D"));// gives index number at which the character is in the string

// const newstring= gamename.substring(0,4)
//console.log(newstring);

const nestring= gamename.slice(-2,4)
console.log(nestring);

