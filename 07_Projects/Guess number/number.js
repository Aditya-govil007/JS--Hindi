let randomno = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinp = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p=document.createElement('p')

let prevguess=[ ]
let numbguess=1;

let playgame=true;
if(playgame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess=parseInt(userinp.value)
    console.log(guess)
    validateguess(guess)
  })
}
function validateguess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess<1){
    alert('Please enter number greater than 1')
  }
  else if(guess>100)
  alert('Number is gretaer than 100')
  else{
    prevguess.push(guess)
    if(numbguess>10){
      displayguess(guess)
      displaymessage(`Game Over. Random Number was - ${randomno}`)
    }
    else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}
function checkguess(guess){
  if(guess === randomno){
    displaymessage(`Victory ..`)
    endgame()
  }
  else if(guess<randomno){
    displaymessage('You are close')
  }
  else if(guess>randomno){
    displaymessage("Good try . Try smaller")
  }  
}
function displayguess(guess){
  userinp.value=""
  guessSlot.innerHTML +=`${guess} , `
  numbguess++;
  lastresult.innerHTML =`${11-numbguess}`
}
function displaymessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function endgame(){
  userinp.value=""
  userinp.setAttribute('disabled', ' ' )
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
  startover.appendChild(p)
  newGame()
}
function newGame(){
  const newgamebutton =document.querySelector('#newGame')
  newgamebutton.addEventListener('click' , function (e){
    randomno=parseInt(Math.random() * 100 + 1);
    prevguess=[]
    numbguess=1
    guessSlot.innerHTML=''
    lastresult.innerHTML=`${11-numbguess}`
    userinp.removeAttribute('disabled') 
    startover.removeChild(p)
    playgame=true
  })

}