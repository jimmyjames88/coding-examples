const message = 'Hello world!!!';
let newMessages = 5;

function checkMessages() {
    alert(message);
    newMessages = 0;
}

let checkMessagesButton = document.querySelector('.check-messages-button');
checkMessagesButton.addEventListener('click', function() {
    checkMessages();
    console.log(newMessages);
});
