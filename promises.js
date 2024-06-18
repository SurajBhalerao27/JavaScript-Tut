// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: "Suraj", password: "123" });
//         } else {
//             reject("Error: " + error);
//         }
//     }, 2000)
// })
//     .then((user) => {
//         console.log(user);
//         console.log(`username is - ${user.username} , password is - ${user.password}`);
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("Finally");
//     })


// // See by async and await methods
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Suraj", password: "123" });
//         } else {
//             reject("Error: " + error);
//         }
//     }, 2000)
// })
// async function comsumePromise2() {
//     try {
//         let response = await promise2;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };
// comsumePromise2()


// getting all user data from --- https://jsonplaceholder.typicode.com/users  by async and await
// async function getAllUsers() {
//     try {
//         const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
//         console.log(response[0].name);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();



// getting all user data from --- https://jsonplaceholder.typicode.com/users  by .then() method
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data[0]))
    .catch(error => console.log(error));