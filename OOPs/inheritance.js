// Define a class User with a constructor that takes a username parameter
class User {
    constructor(username){
        // Initialize the username property with the provided username
        this.username = username;
    }

    // Define a method logMe that logs the username
    logMe(){
        console.log(`Username is - ${this.username}`);
    }
}

// Define a class Teacher that extends the User class
class Teacher extends User {
    // Define a constructor that takes a username, email, and password parameters
    constructor(username, email, password){
        // Call the constructor of the parent class (User) with the provided username
        super(username);
        // Initialize the email and password properties with the provided values
        this.email = email;
        this.password =  password;
    }

    // Define a method addCourse that logs a message indicating a new course has been added by the teacher
    addCourse(){
        console.log(`A new course added by '${this.username}'`);
    }
}

// Create an instance of the Teacher class with the username "Demo", email "demo@gmail.com", and password "123"
const suraj = new Teacher("Demo","demo@gmail.com",123);
// Call the addCourse method on the suraj instance and log the result
console.log(suraj.addCourse());