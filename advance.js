// functions 
// function funcName () {}

// const funcName = () => {}

// varibles 
// var varName ;
// let varName ;
// const varName ;


// var myName = "awdiz";
// console.log(myName);
// myName = "abc"; // Re-assigning value
// console.log(myName);
// var myName = "xyz"; // re-decrlaring
// console.log(myName);

// var - re-decleration and re assigning is possible

// let namee = "awdiz";
// console.log(namee);
// namee = "abc"; // re-assigning
// console.log(namee);
// let namee = "xyz"; // re-decleration
// console.log(namee);

// let - re-assigning is possible , re-decleration is not possible

// const age = 20;
// console.log(age);
// // age = 25; // re-assigning
// // console.log(age);
// const age = 40; // re-declaer
// console.log(age);

// const -  re-decleration and re assigning is NOT possible




// async await 
// sy 

// function time() {
//     setTimeout(() => {
//         console.log("called in time");
//     }, 5000);
// }


// async function test() {
//     console.log("called before")
//     var wait = await time();
//     console.log(wait)
//     console.log("called again")
// }
// test();


// function resolveAfter2Seconds() {
//     return new Promise(resolve,reject => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     console.log('calling again');
//     // Expected output: "resolved"
//   }
// asyncCall();

