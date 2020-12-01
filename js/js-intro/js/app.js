var name = prompt("What is your pet's name?"); // string (just collection of characters wrapped in quotes)
var type = prompt("What type of pet is " + name + "?");
var age = prompt("How old is your " + type + "?");
var opinion = confirm("Do you want to know what I think of your pet?");

// less than or equal to 1yr old
if (age <= 1 && opinion == true) {
    console.log(name + " the " + type + " is just a baby");
}
// age is greater than or equal to 10
else if (age >= 10 && opinion == true) {
    console.log(name + " the " + type + " is a senior");
}
else if (opinion == true){
    console.log(name + " the " + type + " is mid-age");
}
else {
    console.log("Fine, I won't tell you my opinion");
}

// string comparisons are case-sensitive, capitalized 'Cat' and 'Dog' would not work as expected
if (type == 'cat' || type == 'dog') {
    console.log("That is a normal pet!");
}
else {
    console.log("That is an exotic pet");
}