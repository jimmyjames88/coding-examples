function checkForWinCondition() {
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
}
function drawBattleLog() {
    let battlelog = document.querySelector('.battlelog');
    log.map(function(line) {
        battlelog.innerHTML += '<li>' + line + '</li>';
    });
}
function drawButtonInFooter() {
    let footer = document.querySelector('footer');
    if(fightAgain) {
        player.pokemon.attacks.map(function(attack, index) {
            let button = document.createElement('button');
            button.innerText = attack.name;
            button.addEventListener('click', function() {
                player.move = index;
                cpu.move = Math.floor(Math.random() * cpu.pokemon.attacks.length);
                Cookies.set('game', JSON.stringify(game));
                location.reload();
            });
            footer.append(button);
        });
    } else {
        let button = document.createElement('button');
        button.innerText = 'Play a new round';
        button.addEventListener('click', function() {
            Cookies.remove('game');
            location.href = 'index.html';
        });
        footer.append(button);
    }
}
function drawPokemonOnScreen() {
    document.querySelector('.player .name').innerText = player.pokemon.name;
    document.querySelector('.player .health').innerText = player.health + ' / ' + player.pokemon.hp;
    let playerImg = document.querySelector('.player img');
    playerImg.src = player.pokemon.image;
    
    if(!game.firstRound)
        playerImg.classList.add('animate');

    document.querySelector('.cpu .name').innerText = cpu.pokemon.name;
    document.querySelector('.cpu .health').innerText = cpu.health + ' / ' + cpu.pokemon.hp;
    let cpuImg = document.querySelector('.cpu img');
    cpuImg.src = cpu.pokemon.image;
    
    if(!game.firstRound)
        cpuImg.classList.add('animate');
}
function doBattleSequence() {
    const playerMove = player.pokemon.attacks[player.move];
    const playerAttack = rollDice(
        playerMove.hit, 
        playerMove.dam
    );
    cpu.health = cpu.health - playerAttack;
    log.push(`Player attacks with <strong>${playerMove.name}</strong> and does <strong>${playerAttack} damage</strong>`);

    const cpuMove = cpu.pokemon.attacks[cpu.move];
    const cpuAttack = rollDice(
        cpuMove.hit, 
        cpuMove.dam
    );
    player.health = player.health - cpuAttack;
    log.push(`CPU attacks with <strong>${cpuMove.name}</strong> and does <strong>${cpuAttack} damage</strong>`);
}
function rollDice(amount, sides) {
    total = 0;
    for(let i = 0; i < amount; i++) {
        roll = Math.floor(Math.random() * sides) + 1;
        total += roll;
    }
    return total;
}

// Start
let game = JSON.parse(Cookies.get('game'));
let cpu = game.cpu;
let player = game.player;
let log = [];
let fightAgain = false;

if(!game.firstRound) {
    doBattleSequence();
}
checkForWinCondition();
drawPokemonOnScreen();
drawBattleLog();

game.firstRound = false;
drawButtonInFooter();