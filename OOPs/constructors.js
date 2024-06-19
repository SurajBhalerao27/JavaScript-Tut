// Here we declared the object defination.
const user = {
    username : 'Demo',
    password : 'Password',
    email : 'Demo@example.com'
}

// below function is knows as 'Constructors'
function User(username,password,email) {
    this.username = username
    this.password = password
    this.email = email

    return this // here no need to return, because implicitly constructors are returning.
}

const user1 = User("Suraj", "123...", "suraj@gmail.com"); // this will gives all the global context data for the user.
const user2 = new User("Poms", "...456", "poms@gmail.com"); // this will gives us the new scope for the user every time.

/*
    
*/

console.log(user1);
console.log(user2);