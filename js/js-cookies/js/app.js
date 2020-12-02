let current = Cookies.get('current') || 0;
current = Number(current);

let displayCurrent = document.querySelector('.current');
displayCurrent.innerText = current;

let addBtn = document.querySelector('.add');
addBtn.addEventListener('click', function() {
    console.log('add clicked');
    // collect the value from the input
    let amountToAdd = document.querySelector('.field').value;
    amountToAdd = Number(amountToAdd);
    // add that value to current
    const newTotal = current + amountToAdd;
    // save that current value to the current cookie
    Cookies.set('current', newTotal);
    // reload the page
    location.reload();
});

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function() {
    console.log('reset clicked');
    // remove the cookie
    Cookies.remove('current');
    // reload the page
    location.reload();
});