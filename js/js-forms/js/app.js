function sendTweet() {
    console.log('sendTweet');
    let tweetTitle = document.getElementById('title-input');
    let tweetBody = document.getElementById('body-input');
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    }
    
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        // status 201 = CREATED
        if(this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
        }
    }

    ajax.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    ajax.setRequestHeader("Content-type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

let tweetButton = document.getElementById('tweet-submit');
tweetButton.addEventListener('click', sendTweet);