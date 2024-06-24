// Define a class User with a constructor that takes a username parameter
class User {
    constructor(username) {
        this.username = username; // Initialize the username property
    }

    // Method to log a message with the user's username
    logMe() {
        console.log(`User ${this.username} logged`);
    }

    // Method to create a unique user ID
    createId() {
        return `1232`; // Placeholder ID, replace with actual logic
    }
}

// Create a new instance of User with the username "suraj"
const suraj = new User("suraj");

// Log the unique ID of the suraj user
console.log(suraj.createId());