var animals = [
    'This is the greatest trade deal in the history of trade deals',
    'Cat',
    'Snek',
    'Tiger',
    'Lion',
    'Elephant'
];

// while
document.write('<ul>');
var counter = 0;
while(counter < 6) {
    document.write('<li>' + animals[counter] + '</li>');
    counter++;
}
document.write('</ul>')

// for
document.write('<ul>');
for(var counter = 0; counter < animals.length; counter++) {
    document.write('<li>' + animals[counter] + '</li>');
}
document.write('</ul>')