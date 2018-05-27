// List of all cards
var allCards = ['fa-diamond','fa-diamond',
              'fa-paper-plane-o','fa-paper-plane-o',
              'fa-anchor','fa-anchor',
              'fa-bolt','fa-bolt',
              'fa-cube','fa-cube',
              'fa-leaf','fa-leaf',
              'fa-bicycle','fa-bicycle',
              'fa-bomb','fa-bomb'
              ];

// Moves variables
var moveCounter = document.querySelector('.moves');
var moves = 0;
  
// Keep track of cards flipped
var openCards = [];

//Load new game and then shuffle
newGame();

 /*   - shuffle the list of cards using the provided "shuffle" method below*/
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 *   - loop through each card and create its HTML Maybe re do again?? Look it up later
 */
function makeCard(card) {
  return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}
 
function newGame(){
  var deck = document.querySelector('.deck');
  var cardGrid = shuffle(allCards).map(function(card) {
    return makeCard(card);
  });
  
  deck.innerHTML = cardGrid.join('');
}

/*
 * set up the event listener for a card. If a card is clicked:
 */
var cardList = document.querySelectorAll('.card');

for(let card of cardList) {
  card.addEventListener('click', function(flipCard){
    //Disable clicking on the same card
    if (!card.classList.contains('open') &&     !card.classList.contains('show') && !card.classList.contains('match')){
      
  //Add the card to a *list* of "open" cards
    openCards.push(card);

  //Prevent from showing more than two cards
      if (openCards.length > 2){
        //hide
      } else {
        //Show cards
        card.classList.add('open','show');
        //Check if cards match
        if (openCards[0].dataset.card ==   openCards[1].dataset.card){
            cardMatch();
        } else {
            notMatching();
        }
        }
      }
    });
  
// cardMatch function
function cardMatch(){
  openCards[0].classList.add('match');
  openCards[0].classList.add('open');
  openCards[0].classList.add('show');

  openCards[1].classList.add('match');
  openCards[1].classList.add('open');
  openCards[1].classList.add('show');
  
  //empty  array
  openCards = [];
}

// Not matching function
function notMatching(){

//Flip over after a bit more than 1/2second
  setTimeout(function(){
    for (let card of openCards){
      card.classList.remove('open','show');
    }
    moveCounter();
    openCards = []; //Empty openCards array
   }, 700);
   const time = document.getElementById('time');


//timer//
var timer = new Timer();
}var h2 = document.getElementsByTagName('h2')[0],
start = document.getElementById('start'),
stop = document.getElementById('stop'),
clear = document.getElementById('clear'),
seconds = 0, minutes = 0, hours = 0,
t;

function add() {
seconds++;
if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
}

h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

timer();
}
function timer() {
t = setTimeout(add, 1000);
}



/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
h2.textContent = "00:00:00";
seconds = 0; minutes = 0; hours = 0;
}

// Move Counter function
function moveCounter(){
  moves++;
  moveCounter.innerHTML = moves;
}

}