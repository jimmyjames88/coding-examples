function startGame(index) {
    /*
        - Randomly select a pokemon for the CPU (https://www.w3schools.com/js/js_random.asp)
        - Save the state of the game by storing the following information in a cookie or cookies:
            - Player's chosen pokemon details
            - Player's current health (equal to the pokemon's hp)
            - CPU's chosen pokemon details
            - CPU's current health (equal to the pokemon's hp)
            - Hint: all of this information can be passed in a single cookie
        - Redirect the user to the battle page (https://www.w3schools.com/howto/howto_js_redirect_webpage.asp)
    */

    const randomNumber = Math.floor(Math.random() * pokemon.length);

    // setup the game
    const game = {
        firstRound: true,
        player: {
            pokemon: pokemon[index],
            health: pokemon[index].hp,
            move: null
        },
        cpu: {
            pokemon: pokemon[randomNumber],
            health: pokemon[randomNumber].hp,
            move: null
        }
    }

    console.log(game);

    Cookies.set('game', JSON.stringify(game));
    location.href = 'battle.html';

}

// Map function to create a choice button for each Pokemon in the list
pokemon.map(function(choice, index) {
    // create a div in memory with the image, name and basic stats
    let div = document.createElement('div');
    
    // popuplate the div
    div.innerHTML = `
        <img src="${choice.image}">
        <h3>${choice.name}</h3>
    `;

    let attackList = document.createElement('ul');
    choice.attacks.map(function(attack) {
        let attackItem = document.createElement('li');
        attackItem.innerText = attack.name
        attackList.append(attackItem);
    });

    div.append(attackList);

    // make the div clickable
    div.addEventListener('click', function() {
        startGame(index);
    });

    // then append the div to the .choose-pokemon container
    document.querySelector('.choose-pokemon').append(div);
});