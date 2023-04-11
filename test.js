



// Hoisting - Advance JS
// avi = "a brillent student."; // assign
// console.log(avi);
// var avi; // initilasation


// Closure - Advance JS
function outerFunction() {
    var vibha = "123456";
    function innerFunction() {
        console.log(vibha)
    }
    return innerFunction;
}
let res  = outerFunction();
// let res2 =  () => {};
console.log("res here")
console.log("res here")
console.log("res here")
console.log("res here")
console.log("res here")
console.log("res here")
console.log(typeof(res),"tyoe if res")
res();




