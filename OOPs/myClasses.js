// Define a class User with properties name, email, and password
class User {
    // Constructor to initialize the properties
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Method to encrypt the password
    encryptPassword(){
        return `1A7#@!${this.password}xyz`
    }

    // Method to change the username to uppercase and log it
    changeUsername(){
        console.log(`${this.name.toUpperCase()}`);
    }
}

// Create an instance of User with name "suraj", email "email@gmail.com", and password "485"
const user1 = new User("suraj", "email@gmail.com", "485")

// Call the encryptPassword method on user1 and log the result
console.log(user1.encryptPassword());

// Call the changeUsername method on user1 and log the result
console.log(user1.changeUsername());