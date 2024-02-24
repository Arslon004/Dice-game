//buttons
let btnRoll=document.querySelector('.btn--roll');
let btnNew=document.querySelector('.btn--new');
let btnHold=document.querySelector('.btn--hold');

//variables
let currentScore = 0;
let activePlayer = 0;
let score=[0, 0];
let gameOver=true

//switch Player
let switchPlayer=()=>{
  currentScore=0;
  document.getElementById(`current--${activePlayer}`).textContent=currentScore;
   activePlayer= activePlayer == 0 ? 1 : 0
   document.querySelector('.player--0').classList.toggle('player--active')
   document.querySelector('.player--1').classList.toggle('player--active')
}

//dice image
let diceImg=document.querySelector('.dice');
diceImg.style.display='none';

btnRoll.addEventListener('click',()=>{
  if(gameOver){
  diceImg.style.display='block';

  let random=Math.floor(Math.random() * 6 + 1);
  diceImg.src=`./dice game/dice-${random}.png`;

  if(random !== 1){
    currentScore += random;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
  }else{
    switchPlayer();
  }
}
});
//hold score
btnHold.addEventListener('click',()=>{
  if(gameOver){
 score[activePlayer] += currentScore;
 document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

 if(score[activePlayer] >= 20){
   gameOver=false;
   document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
 }else{
  switchPlayer();
 }
}
});
//new button
btnNew.addEventListener('click',()=>{
   currentScore = 0;
   activePlayer = 0;
   score=[0, 0];
   gameOver=true;
   document.getElementById(`current--1`).textContent=currentScore;
   document.getElementById(`current--0`).textContent=currentScore;
   document.getElementById(`score--0`).textContent=0
   document.getElementById(`score--1`).textContent=0;
   document.querySelector(`.player--0`).classList.remove('player--winner')
   document.querySelector(`.player--1`).classList.remove('player--winner');
   document.querySelector(`.player--1}`).classList.remove('player--active');
   document.querySelector(`.player--0}`).classList.add('player--active')
})
