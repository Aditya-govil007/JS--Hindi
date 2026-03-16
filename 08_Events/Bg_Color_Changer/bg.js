const randomcolor= function(){
  const val="0123456789ABCDEF"
  let color='#'
  for(let i =0;i<6;i++){
    color+=val[Math.floor(Math.random()*16+1)]

  }
  return color
};
let intervalid;
const colorchange=function(){
  const bgcolorchange=function(){
    document.body.style.backgroundColor=randomcolor()
  }
  if(!intervalid){
    intervalid=setInterval(bgcolorchange,1500)
  }
};
const stopcolorchange=function(){
  clearInterval(intervalid);
  

}


document.querySelector('#start').addEventListener('click',colorchange)
document.querySelector('#stop').addEventListener('click',stopcolorchange)







