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


}
//timer//

  /**
   * timer() function will start counting the time
   * when user start to click card/start to play game
   */
  function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = "Time: " + minute + " min " +second + " second";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

/*
* Stop the Timer
*/
function stopTimer() {
 clearInterval();
}



//restart button???

function restartGame() {
	restart.on('click', function() {
		startGame();
	})
}

// Move Counter function
function moveCounter(){
  moves++;
  moveCounter.innerHTML = moves;
}

}