function makeButton(index) {
    let button = document.createElement('button');
    button.innerText = things[index];
    index++;
    if(index < things.length) {
        button.addEventListener('click', function() {
            makeButton(index);
        });
    }
    let target = document.querySelector('.buttons');
    target.append(button);
}

let things = ['baseball', 'hockey stick', 'couch', 'racquet'];
makeButton(0);