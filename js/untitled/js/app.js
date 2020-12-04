// variables (w9b) and arrays (w9e)
let pageTitle = 'Random Dog Photos!!!';
let dogPhotos = [
    'https://random.dog/808396ad-2ba6-4b2a-8024-7b6cac8dad93.mp4',
    'https://random.dog/afba068f-e94f-4cdf-b21e-659e5ff12b91.jpg',
    'https://random.dog/3c4ae6f2-7f29-45e0-94f7-c561d3523f04.mp4',
    'https://random.dog/3c8233e8-c1d0-4214-9848-7658e6d9807e.jpg' 
];

// functions (w9g)
function isVideo(url) {
    return url.includes('.mp4');
}

// access individual array items by their array index (w9e)
console.log(dogPhotos[2]);

// set page title - dom selectors (w10a) - element manipulation (w10b)
document.querySelector('.title').innerText = pageTitle;

// loops (w9f)
for(let i = 0; i < dogPhotos.length; i++) {
    let container = document.querySelector('.dog-photos');
    let div = document.createElement('div');
    div.classList.add('photo-wrapper');

    // functions (w9g) and element manipulation (w10b)
    if(isVideo(dogPhotos[i])) {
        photo = document.createElement('video');
        photo.setAttribute('controls', true);
    } else {
        photo = document.createElement('img');
    }
    photo.setAttribute('src', dogPhotos[i]);

    div.append(photo);
    container.append(div);

}