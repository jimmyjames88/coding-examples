let button = document.querySelector('.save-button');
let reset = document.querySelector('.reset-button');
let input = document.querySelector('input[name=name]');

function resetName() {
    Cookies.remove('name');
    location.reload();
}

function saveName() {
    console.log('Name cookie set to ' + input.value);
    Cookies.set('name', input.value);
    location.reload();
}

button.addEventListener('click', saveName);
reset.addEventListener('click', resetName);

if(Cookies.get('name')) {
    let p = document.createElement('p');
    p.innerText = 'Hello there ' + Cookies.get('name');
    document.body.prepend(p);
}