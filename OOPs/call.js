// Function to set the username
function setUserName(username){
    this.username = username; // Assign the username to the current object
    console.log('Called'); // Log a message to the console
}

// Function to create a new user
function createUser(username, email, password){
    setUserName.call(this, username); // Call the setUserName function with the current object as context and the provided username

    this.email = email; // Assign the email to the current object
    this.password = password; // Assign the password to the current object
}

// Create a new user object using the createUser function
const user1 = new createUser('Suraj', 'suraj@gmail', '123');

// Log the created user object to the console
console.log(user1);



// *Old approach to having inheritance in JavaScript using object literals.

// User object literal
const User = {
    name: 'John',
    email: 'john@gmail',
    password: '123'
};

// Teacher object literal
const Teacher = {
    isTeaching: true,
    age: 25,
    subject: 'Javascript'
};

// Student object literal
// Here, we are using the __proto__ property to establish inheritance from Teacher.
// This is considered an outdated approach and is not recommended for modern JavaScript development.
const Student = {
    isStudying: true,
    age: 20,
    subject: 'Javascript',
    study_hrs: 3,

    // Dependencies on Teacher
    __proto__: Teacher
};


// *Modern approach to achieve inheritance in javascript
// Modern approach to achieve inheritance in JavaScript using Object.setPrototypeOf()
// This method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
Object.setPrototypeOf(Teacher, Student); 