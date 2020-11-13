var name = prompt("What is your pet's name?"); // string (just collection of characters wrapped in quotes)
var type = prompt("What type of pet is " + name + "?");
var age = prompt("How old is your " + type + "?");    

// less than or equal to 1yr old
if (age <= 1) {
    console.log(name + " the " + type + " is just a baby");
}
// age is greater than or equal to 10
else if (age >= 10) {
    console.log(name + " the " + type + " is a senior");
}
// if none of the above conditions are true...
else {
    console.log(name + " the " + type + " is mid-age");
}