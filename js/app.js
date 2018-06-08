//const time = document.getElementById('time');
// t is a global variable therefore its val can be accessed anywhere
//let t = 0;

const restart = document.querySelector('.restart');

//function Timer() {
    //var timer = setInterval(function() {
       // console.log(t);
       // t++;
       // if (t >= 0) {
          //  time.innerHTML = t;

            //here could put other conditionals to make mins or whatever
            /*clearInterval(timer);*/

     //   }
   // }, 1000);
//}
//stop timer function
//function stopTimer() {
   // clearInterval(gameTimer);
//}
//var timer = new Timer();
//console.log(t);

// Timer functions
let sec = 0;
let min = 0;
let timer;
var started = false;
function startTimer() {
    if (!started){
        timer = setInterval(insertTime, 1000);
        started = true;
    }

}

function stopTimer() {
clearInterval(timer);
sec = 0;
min = 0;
started = false;
}

function insertTime() {
sec++;

if (sec < 10) {
sec = `0${sec}`;
}

if (sec >= 60) {
min++;
sec = "00";
}

// display time
document.querySelector('.timerOutput').innerHTML = "0" + min + ":" + sec;
}


// List of all cards
var allCards = ['fa-diamond', 'fa-diamond',
    'fa-paper-plane-o', 'fa-paper-plane-o',
    'fa-anchor', 'fa-anchor',
    'fa-bolt', 'fa-bolt',
    'fa-cube', 'fa-cube',
    'fa-leaf', 'fa-leaf',
    'fa-bicycle', 'fa-bicycle',
    'fa-bomb', 'fa-bomb'
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
    var currentIndex = array.length,
        temporaryValue, randomIndex;

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

function newGame() {
    var deck = document.querySelector('.deck');
    var cardGrid = shuffle(allCards).map(function(card) {
        return makeCard(card);
    });
    deck.innerHTML = cardGrid.join('');
}

let movesMade = 0;
let cardsClicked = 0;

//set up event listener for a card clicked//


var cardList = document.querySelectorAll('.card');
document.querySelector(".card").addEventListener("click", startTimer);
for (let card of cardList) {
    card.addEventListener('click', function() {
    
        cardsClicked++;
        if (cardsClicked == 2) {

            movesMade++;
            cardsClicked= 0; // resets card clicks 
            
            }
        document.querySelector('span.moves').innerHTML = movesMade;
        //Disable clicking on the same card
        if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
            //currentT = t;
            //Add the card to a *list* of "open" cards
            openCards.push(card);
          
            //Prevent from showing more than two cards
            if (openCards.length > 2) {
              //hide
            } else {
              //Show cards
              card.classList.add('open', 'show');
              //Check if cards match
          
              if (openCards.length === 2) {
                if (openCards[0].dataset.card == openCards[1].dataset.card) {
                  cardMatch();
                } else {
                  notMatching();
                   
                }
            }
        }  
    }
});
}
    

    // cardMatch function
    function cardMatch() {
        openCards[0].classList.add('match', 'open', 'show');
        openCards[1].classList.add('match', 'open', 'show');

    

        //empty  array
        openCards = [];
    }
    //reset and restart
    restart.addEventListener('click', reset);

    function reset() {
        location.reload();
    }
    // Not matching function
    function notMatching() {

        //Flip over after a bit more than 1/2second
        setTimeout(function() {
            for (let card of openCards) {
                card.classList.remove('open', 'show');
            }
            
            openCards = []; //Empty openCards array
        }, 700);
        // const time = document.getElementById('time');


    }

  // Get the modal


  //congratulations when all cards match, show modal and moves, time and rating....I need to do this somehow....//
function congratulations(){
    if (matchedCard.length == 16){
        clearInterval(interval);
        finalTime = timer.innerHTML;
    //show congratulations modal
    modal.style.display = "block";
    }
}
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}  

    const starRating = document.getElementsByClassName('stars')[0];

    function rating () {
      switch (moves) {
        case 15:
          starRating.innerHTML = `<li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>`;
          break;
    
        case 20:
          starRating.innerHTML = `<li><i class="fa fa-star"></i></li>`;
          break;
    
        default:
      }
    }

 

