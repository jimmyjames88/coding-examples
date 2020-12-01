// select first notification
var notification = document.querySelector('.notification');

var colorClasses = [
    'is-primary',
    'is-link', 
    'is-info', 
    'is-success',
    'is-warning',
    'is-danger'
];

colorClasses.map(function(color) {
    // create a notification element
    var newNotification = document.createElement('article');
    newNotification.classList.add('notification', color);
    newNotification.innerText = 'Hello world!';

    // create delete button and add it to the newNotification
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');

    // attach an event handler to deleteBtn
    deleteBtn.addEventListener('click', function() {
        newNotification.remove();
    })
    
    // add delete btn to newNotification
    newNotification.append(deleteBtn);
    
    // append the newNotification to the .container div
    var container = document.querySelector('.container');
    container.append(newNotification);
});
