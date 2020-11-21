/*
* 1. Display text that says whether the player won or lost
* 2. Count wins AND losses
* 3. Allow the player to place monetary bets
* 4. Style the game and make it look cool (check out www.bulma.io)
*/

var scoreboard = document.querySelector('.score');
var resetButton = document.querySelector('.reset');
var resultText = document.querySelector('.result');
var headsButton = document.querySelector('.heads');
var tailsButton = document.querySelector('.tails');

function playRound(guess) {
    var possibilities = [ 'heads', 'tails' ];
    // random *whole* number between 0 and 1
    var coinToss = Math.round(Math.random())

    var resultString = 'The coin came up ' + possibilities[coinToss];
    resultText.innerText = resultString

    if(guess == possibilities[coinToss]) {
        // win
        // update wins count cookie
        if(Cookies.get('wins')) {
            var wins = Number(Cookies.get('wins'))  // get wins as a Number (not a string)
            wins++; // add one shorthand
            Cookies.set('wins', wins);
        } else {
            Cookies.set('wins', '1');
        }
    } 
    console.log('Wins:' + Cookies.get('wins'));
    updateScoreboard();
}

function updateScoreboard() {
    scoreboard.innerText = Cookies.get('wins') || 0;
}

headsButton.addEventListener('click', function() {
    playRound('heads');
});

tailsButton.addEventListener('click', function() {
    playRound('tails');
});

resetButton.addEventListener('click', function() {
    Cookies.remove('wins');
    updateScoreboard();
})

updateScoreboard();