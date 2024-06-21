class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `1A7#@!${this.password}xyz`
    }
}

const user1 = new User("suraj", "email@gmail.com", "485")
console.log(user1.encryptPassword());