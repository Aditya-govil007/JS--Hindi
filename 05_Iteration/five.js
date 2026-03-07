const codeing=['python','cpp','ruby','java']
codeing.forEach( function name(item){
    // console.log(item);
} )
codeing.forEach( function name(item,index){
    // console.log(item,index);
} )
// ()=>{} iife used here

const mycoding=[
    {
        langname: "javascript",
        langshort : "js"
    },
    {
        langname : "python",
        langshort : "py"

    }
]

mycoding.forEach((item) => {
    console.log(item.langname);
    
})