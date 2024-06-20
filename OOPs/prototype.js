// This is an array of hero names
const myHero = ["thor", "spiderman", "ironman", "antman"];

// This is an object that stores hero names as keys and their powers as values
let hero_powers = {
    thor: "hammer",
    spiderman: "web",
    ironman: "iron",
    antman: "ant",

    // Method to print Thor's power
    getThorPower: function() {
        console.log(`Thor power is ${this.thor}`);
    },

    // Method to print Spiderman's power
    getSpidermanPower: function() {
        console.log(`Spiderman power is ${this.spiderman}`);
    },

    // Method to print Ironman's power
    getIronmanPower: function() {
        console.log(`Ironman power is ${this.ironman}`);
    },

    // Method to print Antman's power
    getAntmanPower: function() {
        console.log(`Antman power is ${this.antman}`);
    }
};

// Adding a method to Object prototype and also to it's decendents also. This method will be available to all objects 
Object.prototype.suraj = function() {
    console.log("Suraj is now added");
};

// Calling the suraj method on hero_powers object - as it is available to all objects so we can easily access.
hero_powers.suraj();

/* 
    Calling the suraj method on myHero array. This will throw an error because arrays do not have the suraj method(possibly) but, as we have
    added the suraj() method to the Object prototype so we can easily access by objects, strings, arrays, etc 
*/
myHero.suraj();


// Adding a method to the Array prototype. This method will be available to all arrays.
Array.prototype.new_suraj = function() {
    console.log("New suraj is now added in array prototype");
};

// Calling the new_suraj method on myHero array.
// This will print "New suraj is now added in array prototype" to the console.
myHero.new_suraj();

// Calling the new_suraj method on hero_powers object.
// This will throw an error because objects do not have the new_suraj method.
// hero_powers.new_suraj();


// Defining a variable user with a string value
let user = "OPT-IN";

// Adding a method to the String prototype. This method will be available to all strings.
// The trueLength method calculates the true length of a string by trimming leading and trailing spaces and then getting the length.
String.prototype.trueLength = function() {
    console.log(`True length of string is : ${this.trim().length} `);
};

// Calling the trueLength method on the user variable.
// This will print "True length of string is : 5" to the console.
user.trueLength();

// Calling the trueLength method on a string literal "Pramod       ".
// This will print "True length of string is : 7" to the console.
"Pramod       ".trueLength();