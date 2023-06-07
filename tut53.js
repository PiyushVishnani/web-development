console.log("This is tutorial 53");

let name1 = "Piyush";
let name2 = "Vishvajeet";
let name3 = "Aditya";
let name4 = "Robert";

console.log(name1 + " is a good boy.");
console.log(name2 + " is a good boy.");
console.log(name3 + " is a good boy.");
console.log(name4 + " is a good boy.");

// or this can be done by creating a funtion

function greet(name) {
    console.log("Good morning "+ name);
}
greet("Piyush Vishnani ");

function sum(a,b,c) {
    let d = a+b+c;
    return d;
    console.log("this line is not reachable because this is after return");
}
console.log(sum(2,3,5));