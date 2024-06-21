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