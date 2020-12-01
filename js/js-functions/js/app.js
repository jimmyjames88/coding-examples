function sendMail(address) {
    if(address) {
        console.log('Sending mail to recipient: ' + address);
    } else {
        console.log('Please provide an address');
    }
}
sendMail('123 Riverside Drive');

function greet(name) {
    var greeting = 'Hey there ' + name;
    console.log(greeting);
}
greet('James');

function square(n) {
    return n * n;
}

var squaredNum = square(9);
console.log(squaredNum);

function minimum(one, two) {
    if(one <= two) {
        return one;
    } else if (two < one) {
        return two;
    } else {
        console.log('Something went wrong')
    }
}

var smaller = minimum(250, 1000);
console.log(smaller);


function dogYears(age) {
    return age * 7;
}

var dogAges = [ 3, 10, 12, 7, 4, 9 ]    // (in human years)

for(var i = 0; i < dogAges.length; i++) {
    // var age = dogAges[i];
    // var inDogYears = dogYears(age);
    // console.log(inDogYears);

    console.log(dogYears(dogAges[i]))

    // 1st:
    // console.log(dogYears(dogAges[0]))
    // console.log(dogYears(3))
    // console.log(21)

    // 2nd:
    // console.log(dogYears(dogAges[1]))
    // console.log(dogYears(10))
    // console.log(70)
}

var spongebob = 'wOw YoU ArE suPeR gReAt';
console.log(spongebob.toLowerCase())

var favoriteNumber = 555;
console.log(favoriteNumber.toLowerCase())   // not a function available to Numbers