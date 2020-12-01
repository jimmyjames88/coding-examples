var playerChoice = Cookies.get("playerChoice");
var cpuChoice = Math.floor(Math.random() * 3);
var wins = Number(Cookies.get("wins")) || 0;
var message;

if((playerChoice + 1) % 3 == cpuChoice ) {
    // cpu win
    message = 'You lose';
} else if (playerChoice == cpuChoice) {
    // draw
    message = 'Draw';
} else {
    // player win
    message = 'You win!!!';
    wins++
    Cookies.set("wins", wins)
}

document.querySelector('.message').innerText = message;

