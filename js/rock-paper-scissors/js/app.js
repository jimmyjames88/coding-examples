function makeChoice(choice) {
    Cookies.set("playerChoice", choice);
    location.href = "results.html";
}

function makeButton(index, label) {
    var button = document.createElement('button');
    button.innerText = label;
    button.addEventListener('click', function() {
        makeChoice(index);
    })
    buttons.append(button)
}

var buttons = document.querySelector('.buttons');
makeButton(0, 'Rock');
makeButton(1, 'Paper');
makeButton(2, 'Scissors');

var wins = Number(Cookies.get("wins"));
console.log(wins)
if(wins) {
    document.querySelector('.wins').innerText = wins
}

document.querySelector('.reset').addEventListener('click', function() {
    Cookies.remove("wins");
    location.reload()
})



