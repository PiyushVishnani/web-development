// ways to print in javascript
// alert("me")
// document.write("this is document.write");
// comsole.log("printing statement");

// javascript console API
// console.log("Hello World");
// console.warn("this is warning");
// console.error("this is an error")

// javascript variables
// what are variables: containers to store data values
// var number1 = 34;
// var nummber2 = 56;
// console.log(number1 + nummber2);

// data types in javascript
// numbers
var num1 = 4555;
var num2 = 52;
// console.log(num1)
// String
var str1 = "this is a string";
var str2 = "this is also a string";
// console.log(str2);
//objects
var marks = {
    piyush: 98,
    astik: 54,
    himanshu: 85
}
// console.log(marks) //to print marks object
// booleans
var a = true;
var b = false;
// console.log(a,b)
/* at a very high level, there are two types of data types in javascript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: arrays and objects
*/
var arr = [1, 2, 3, 4, 'piyush', 5, 6];
// console.log(arr)
// console.log([4])

// operators in java
// arithmetic operator
var aa = 100
var bb = 10
// console.log("the value of a + b is ", aa+bb);
// console.log("the value of a - b is ", aa-bb);
// console.log("the value of a * b is ", aa*bb);
// console.log("the value of a / b is ", aa/bb);
// assignment operator
var c = bb;
// console.log(c);
// comparison operator
// console.log(aa == bb);
// console.log(aa>bb)
// logical operator
// console.log(true && false)
// console.log(false || true)
// console.log(!true)

// functions in javascript
function avg(a, b) {
    return (a + b) / 2
}
c1 = avg(4, 5)
// console.log(c1)

// conditionals in javascript
/*var age = 54;
if(age>18){
    console.log("you can drink alcohol")
}else{
    console.log("you cannot drink alcohol")
}*/
var arr = [1, 2, 3, 4, 5, 6]
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// arr.forEach(function (element) {
//     console.log(element)
// })
let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// array methods
let myarr = ["fan", "piyush", 45, null, true];
// console.log(myarr);
// myarr.pop()
// console.log(myarr);
// myarr.push("vishnani");
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// myarr.unshift("fan");
// console.log(myarr);
// myarr.sort();
// console.log(myarr);

// string methods in javascript
let string = "this is a beautiful string";
// console.log(string.length);
// console.log(string.indexOf("beautiful"));
// console.log(string.lastIndexOf("i"));
// console.log(string.slice(5,55));

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());

// document.getElementById('click').style.border = '5px solid blue'
// DOM manipulation
let elem = document.getElementById('click');
console.log(elem);
let elemclass = document.getElementsByClassName('container');
console.log(elemclass);
elemclass[0].style.background = 'yellow';
elemclass[1].classList.add('bg-primary');
// console.log(elem.innerHTML);
// console.log(elem.innerText);
let tn = document.getElementsByTagName('div');
console.log(tn);
createdelement = document.createElement('p');
createdelement.innerText = "this is javascript added text";
tn[0].appendChild(createdelement)
createdelement2 = document.createElement('b');
createdelement2.innerText = "this is javascript added bold";
tn[0].replaceChild(createdelement2, createdelement);

// selecting using query
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');