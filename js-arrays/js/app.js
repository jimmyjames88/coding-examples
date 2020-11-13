// simple array
var cars = [
    'Acura RSX', 

];

// append the array
// cars.push('Acura RSX Type-S');

// remove the last value
// cars.pop();

// remove the WRX (index 1)
// cars.splice(1, 3)

console.log(cars)
console.log(cars[0])

// 0 - 19
var counter = 0;
while(counter < 10) {
    console.log(counter);
    counter++;
}

// for alternative
for(var counter = 0; counter < 10; counter++) {
    console.log(counter)
}

// cars loop
for (var i = 0; i < 3; i++) {
    console.log(cars[i])
}
console.log('-----------')
// cars loop
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i])
}