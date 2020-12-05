class Pokemon {
    constructor(name, hp, attack) {
        this.name = name;
        this.hp = hp;
        this.currentHp = hp;
        this.attack = attack;
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