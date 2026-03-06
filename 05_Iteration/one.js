// For loop


// for (let index = 0; index <10; index++) {
//     const element = index;
//     console.log(element);
    
    
// }

for (let i = 1; i <=10; i++) {
    // console.log(`Outer Loop : ${i}`);
    
    for (let j = 1; j < 10; j++) {
        // console.log(i+ '*' +j+'='+i*j);
        
        
    }
    
}

//  Break and Continue condition ->

for (let index = 1; index <=20; index++) {
    // const element = array[index];
    if(index==5){
        console.log("5 detected");
        continue;
        
    }
    console.log(`Values of i is : ${index}`);
    
    
}
