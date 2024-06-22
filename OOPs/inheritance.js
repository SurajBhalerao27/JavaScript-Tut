class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is - ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password =  password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}


const suraj = new Teacher("Demo","demo@gmail.com",123);
console.log(suraj.addCourse());