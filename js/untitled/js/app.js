// variables (w9b) and arrays (w9e)
let pageTitle = 'Random Dog Photos!!!';
let dogPhotos = [
    'https://random.dog/808396ad-2ba6-4b2a-8024-7b6cac8dad93.mp4',
    'https://random.dog/afba068f-e94f-4cdf-b21e-659e5ff12b91.jpg',
    'https://random.dog/3c4ae6f2-7f29-45e0-94f7-c561d3523f04.mp4',
    'https://random.dog/3c8233e8-c1d0-4214-9848-7658e6d9807e.jpg' 
];

// functions (w9g)
// check to see if url is a video
function isVideo(url) {
    return url.includes('.mp4');
}

// access individual array items by their array index (w9e)
console.log(dogPhotos[2]);

// dom selectors (w10a) - element manipulation (w10b)
// display the page title in an existing html element
document.querySelector('.title').innerText = pageTitle;

// loops (w9f)
// loop through the list of dog photos and create html elements to display them
for(let i = 0; i < dogPhotos.length; i++) {
    let container = document.querySelector('.dog-photos');
    let div = document.createElement('div');
    div.classList.add('photo-wrapper');

    // functions (w9g) and element manipulation (w10b)
    // if the url is a video, set up a video element, otherwise setup an img element
    if(isVideo(dogPhotos[i])) {
        elem = document.createElement('video');
        elem.setAttribute('controls', true);
    } else {
        elem = document.createElement('img');
    }
    elem.setAttribute('src', dogPhotos[i]);

    div.append(elem);
    container.append(div);
}