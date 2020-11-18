// Select the first h3 tag, and change it's wording
var heading = document.querySelector('h3');
console.log(heading);
heading.innerHTML = 'Extra extra!!!';
//

// Select all h3 tags, iterate through them, and change their wording
var allHeadings = document.querySelectorAll('h3');
console.log(allHeadings);

for(var i=0; i < allHeadings.length; i++) {
    allHeadings[i].innerHTML = 'Wowowowow';
}
// Change a single heading from the list
allHeadings[2].innerHTML = 'Hey there!!!';
//


// Select a single article by it's ID, change the text color
var gossip = document.getElementById('gossip-column');
gossip.style.color = 'green';

// See the parent and children of the single article we selected
console.log(gossip.childNodes)
console.log(gossip.parentNode)
console.log(gossip.firstChild)

// Select some articles by their class
var electionArticles = document.getElementsByClassName('election');
for(var i=0; i < electionArticles.length; i++) {
    electionArticles[i].style.backgroundColor = 'yellow';
}

// select 1 article from the list of articles,
var lastElectionArticle = document.getElementsByClassName('election')[2];
// create a new element, and then append it to the selected article.
var newElement = document.createElement('p');
newElement.innerHTML = 'HELLO WORLD IT\'S 2020!!!';
lastElectionArticle.appendChild(newElement)

// remove the first article
document.querySelector('article').remove();