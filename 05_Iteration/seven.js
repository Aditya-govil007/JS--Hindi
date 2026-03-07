const mynumber=[1,2,3,4,5,6,7,8,9,10]

// const newnum=mynumber.map((num)=>num+10)

const newnum=mynumber
    .map((nums)=>nums*10)
    .map((nums)=>nums+1)
    .filter((nums)=>nums>=40)
    .filter((nums)=>nums<=90)
// this is called chaining of a map and we can use map how much tume we want
console.log(newnum);