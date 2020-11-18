var ages = [ 12, 89, 54, 10, 33 ];
var is_subscribed = [ true, false, false, true, true ];

// how I'd probably format this data in practice...
// var users = [
//     { age: 12, is_subscribed: true },
//     { age: 89, is_subscribed: false },
//     { age: 54, is_subscribed: false },
//     { age: 10, is_subscribed: true },
//     { age: 33, is_subscribed: true },
// ]

for(var i=0; i < ages.length; i++) {
    var age = ages[i];
    var subbed = is_subscribed[i];

    if(age < 18 && !subbed) {
        console.log('User is less than 18, and is not subscribed');
    } else if(age >= 18 && !subbed) {
        console.log('User is 18 or older, and is not subscribed');
    } else if(age < 18 && subbed) {
        console.log('User is less than 18, and is subscribed');
    } else {
        console.log('User is 18 or older, and is subscribed');
    }
}

function kmToMiles(km) {
    console.log(km * 0.6);
}
console.log('You\'re going to drive ' + kmToMiles(180) + ' miles');

// var ages = [ 12, 89, 54, 10, 33 ];
// var is_subscribed = [ true, false, false, true, true ];

ages.map(function(x) {
    console.log('The age is: ' + x);
});

// var books = [
//     {
//         title: 'Salem\s lot',
//         price: 21.99,
//         qty: 10
//     },
//     {
//         title: 'Dreamcatcher',
//         price: 10.99,
//         qty: 5
//     },
//     {
//         title: 'IT',
//         price: 5.99,
//         qty: 15
//     }
// ]

// var numberOfBooks = books.reduce(function(bookCount, book) {
//     console.log(book.qty)
//     return bookCount + book.qty
// });

// console.log('You have ' + numberOfBooks)

var prices = [ 15, 5, 10 ];
var total = prices.reduce(function(runningTotal, x) {
    return runningTotal + x;
})
console.log('The total is: $' + total);

ages = ages.filter(function(age) {
    if(age >= 18) {
        return true;
    }
});
console.log(ages);