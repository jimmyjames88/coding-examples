class Pokemon {
    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.currentHp = hp;
        this.attack = attack;

        this.createHTML();
    }

    createHTML() {
        // create a div to house the pokemon info
        let div = document.createElement('div');
        div.classList.add('pokemon');
        
        // create h3 for pokemon name
        let name = document.createElement('h3');
        name.innerText = this.name;
        
        // create healthbar div
        let healthbar = document.createElement('div');
        healthbar.classList.add('healthbar');
        
        // create healthbar inner div, set css width of it
        let currentHealth = document.createElement('div');
        let healthPercentage = Math.round(this.currentHp / this.hp * 100);
        currentHealth.style.width = healthPercentage;
        
        // add name and healthbar to div, then add div to container
        let container = document.querySelector('.container');  
        healthbar.append(currentHealth);      
        div.append(name);
        div.append(healthbar);
        container.append(div);
    }

    doAttack(target) {
        target.currentHp = target.currentHp - this.attack;
        console.log(`${this.name} attacks ${target.name} and deals ${this.attack} damage (${target.currentHp} remains)`);
    }
}

let player1 = new Pokemon('Pikachu', 200, 35);
let player2 = new Pokemon('Charmander', 250, 30);
let player3 = new Pokemon('Bulbasaur', 225, 33);

document.querySelector('.fight').addEventListener('click', function() {
    player1.doAttack(player2);
    player2.doAttack(player3);
    player3.doAttack(player1);
});