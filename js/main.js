window.addEventListener('load',init);

//available levels

const levels = {
  easy :5,
  medium:3,
  hard: 2
}

//to chnge levels
let currentlevel = levels.easy;
let time = currentlevel;
let score =0;
let isplaying;

//dom variables it makes us use the id to give them task and  make them more attractive

const wordinput= document.querySelector('#word-input');
const currentword = document.querySelector('#current-word');
const scoredisplay =document.querySelector('#score');
const timedisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [

'aeroplane',
'air',
'airforce',
'airport',
'album',
'alphabet',
'apple',
'arm',
'backpack',
'balloon',
'banana',
'bank',
'barbecue',
'bathroom',
'church',
'circle',
'circus',
'clown',
'coffee',
'comet',
'compass',
'desk',
'diamond',
'dress',
'drill',
'family',
'fan',
'feather',
'festival',
'film',
'finger',
'fire',
'floodlight',
'flower',
'foot',
'man',
'map',
'maze',
'mosquito',
'mouth',
'nail',
'navy',
'necklace',
'needle',
'onion',
];




//initialize game
function init(){

  //function to load word from array
  showword(words);

    //Start matching input word
    wordinput.addEventListener('input',startmatch);

  //countdown every second
  setInterval(countdown,1000);

  //check game status
  setInterval(checkstatus,50);

   
   
}




//start match function
function startmatch(){
  if(matchwords()){
    isplaying =true;
    time = currentlevel+1;
    showword(words);
    wordinput.value="";
    score++;
     //change levels depending upon score
    levelchange();
  }
  //if score is -1 display 0
  if(score === -1){
    scoredisplay.innerHTML = 0;
  }
  else{
  scoredisplay.innerHTML = score;
  }
}

//match words to current input
function matchwords(){
  if(wordinput.value === currentword.innerHTML){
    message.innerHTML= 'WOhOOOOO!!!';
    return true;
  }
  else{
    message.innerHTML = '';
    return false;
  }
}

//pick and show random word
function showword(words){
  const randindex = Math.floor(Math.random() * words.length);

  //output random word
  currentword.innerHTML = words[randindex];
}

//countdown timer

function countdown(){
  if(time>0){
    time--;
  }
  else if(time ===0){
    isplaying = false;
  }
  //show time
  timedisplay.innerHTML = time;
}
// check game status
function checkstatus(){
  if(!isplaying && time===0){
    message.innerHTML = "Game Over!! Better Luck Next Time";
    score = -1;
  }
}

function levelchange(){
  if(score>15)
  {
    currentlevel=levels.medium;
  }
  else if(score>25)
  {
    currentlevel=levels.hard;
  }
  else{
    currentlevel =levels.easy;
  }
}