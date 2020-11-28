/*
    Start by collecting your game data from your cookie(s) and assigning it to variable(s)...
    keep in mind that cookie data is stored as a string - be sure to use Number() if passing integers
    and JSON.parse if passing JSON as cookie data.
*/

let game = JSON.parse(Cookies.get('game'));
let cpu = game.cpu;
let player = game.player;
let log = [];

/*    
    Deal with your "battle sequence" by:
        - Subtracting player attack damage from the CPU's health.
        - Record this action in your "battlelog" (tip: an array works well for the battlelog)
        - Subtracting CPU attack damage from the Player's health.
        - Record this action in your "battlelog"
        - Determining if there has been a win, loss, or draw.
        - Record the result in your "battlelog"
        - Save the updated game state (ie. player/cpu pokemon and health) to a cookie(s)
*/

cpu.health -= player.pokemon.attack;
log.push('Player attacks and does ' + player.pokemon.attack + ' damage');

player.health -= cpu.pokemon.attack;
log.push('CPU attacks and does ' + cpu.pokemon.attack + ' damage');

let fightAgain = false;
if(player.health <= 0 && cpu.health <= 0) {
    // draw
    log.push('<strong>The match was a DRAW</strong');
} else if (player.health <= 0) {
    // loss
    log.push('<strong>You have been DEFEATED</strong');
} else if (cpu.health <= 0) {
    // win
    log.push('<strong>You are VICTORIOUS</strong');
} else {
    // fight again
    fightAgain = true;
}

Cookies.set('game', JSON.stringify(game));

/*
    - Use selectors to target and fill in the img, .name, and .health elements on battle.html
    - Display the .battlelog contents
    - If the battle is over, present the user with a button to go back to index.html to start a new round
      and also wipe the cookies. 
    - Otherwise, present the user with a button to refresh the page and complete the next battle sequence.
*/

document.querySelector('.player .name').innerText = player.pokemon.name;
document.querySelector('.player .health').innerText = player.health + ' / ' + player.pokemon.hp;
document.querySelector('.player img').src = player.pokemon.image;

document.querySelector('.cpu .name').innerText = cpu.pokemon.name;
document.querySelector('.cpu .health').innerText = cpu.health + ' / ' + cpu.pokemon.hp;
document.querySelector('.cpu img').src = cpu.pokemon.image;

let battlelog = document.querySelector('.battlelog');
log.map(function(line) {
    battlelog.innerHTML += '<li>' + line + '</li>';
});

let button = document.querySelector('.game-button');
if(fightAgain) {
    button.innerText = 'Fight again!';
    button.addEventListener('click', function() {
        location.reload();
    });
} else {
    button.innerText = 'Start a new round';
    button.addEventListener('click', function() {
        Cookies.remove('game');
        location.href = 'index.html';
    });
}