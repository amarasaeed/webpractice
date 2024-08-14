var y = 5;
console.log(y); // Output: 5

// Can re-declare with var in the same scope
var y = 10;
console.log(y); // Output: 10

// Can update
y = 15;
console.log(y); // Output: 15

// Function or globally scoped
function testVar() {
    var y = 20;
    console.log(y); // Output: 20 (inside function scope)
}
testVar();
console.log(y); // Output: 15 (outside function scope)

let x = 10;
console.log(x); // Output: 10

// Cannot re-declare with let in the same scope
// let x = 20; // Error: Identifier 'x' has already been declared

// Can update
x = 20;
console.log(x); // Output: 20

// Block scope
{
    let x = 30;
    console.log(x); // Output: 30
}
console.log(x); // Output: 20 (outside the block)

const z = 5;
console.log(z); // Output: 5

// Cannot re-declare with const in the same scope
// const z = 10; // Error: Identifier 'z' has already been declared

// Cannot update
// z = 15; // Error: Assignment to constant variable

// Block scope
{
    const z = 20;
    console.log(z); // Output: 20 (inside block)
}
console.log(z); // Output: 5 (outside block)
// Immutability of the Reference
// When a variable is declared with const, it means the reference to the value cannot change.However, if the value is an object or an array, the contents of the object or array can still be modified.This is because const ensures that the variable name always points to the same object or array, but the object or array itself is mutable.
const obj = {
    name: "amara",
    age: 21
}
obj.name="maria"
console.log(obj);
const a=5
const b=3
const c=a+b
console.log(c)
 var d = 100;
d +=100
console.log(d)
 let amara =10;
 amara *=2;
console.log(amara)
let f = null;
 console.log(f)

let h = Symbol("This is the discription of Symbol")
let i= Symbol("This is the discription of Symbol")
console.log(h.description);
console.log(i);
const cars = ["Saab","Volvo","BMW"];
console.log(cars[0])
const p="3.64"
// console.log(parseFloat(p))
const u=+ p
console.log(typeof(p))
console.log(typeof(u))
// const s=13
// console.log(s.toString())
// console.log(typeof s)
// const s = 13;
// console.log(s.toString());  // Convert the number to a string and log it
// console.log(typeof s);      // Check and log the type of s
const s = 13;
const sString = s.toString();  // Convert the number to a string and assign to a new variable

console.log(sString);        // "13", the string representation of the number
console.log(typeof sString); // "string", because sString is a string
let aa = 12;
//  a =String(a)
console.log(typeof aa);
aa = aa.toString()
console.log(typeof aa)
let aaa=123456
console.log(aaa.toString())
let bb=aaa.toString()
console.log(typeof bb)
let no1 = 123456;
let sum = 0
no1=Array.from(no1.toString(), Number)
for (let i = 0; i < no1.length; i++) {
    sum = no1[i] + sum;
}
console.log(sum)
let cc="123"
cc=Array.from(cc)
console.log(cc)
const bc = new Date();
console.log(bc.toLocaleString()); 
console.log(bc.toString()); 
console.log(bc.toLocaleDateString()); 
let name = "12345";

for(let a=0;a< name.length;a++){
    console.log(name[a])
}
let abs="1234"
let summ=0
abs=Array.from(abs)
for(i=0;i<=abs.length;i++){
   summ=abs[i]+summ 
}
console.log(abs)
console.log(sum)
let q=5
if(a>=6){
    console.log("amara")
}
else{
    console.log("maria")
}
// calc
/* This code snippet is creating a simple calculator program in JavaScript. It prompts the user to
enter the first number, an operator (+, -, *), and the second number. It then converts the input
numbers from strings to numbers using the `Number()` function. */
// let no11=prompt("enter first no")
// no11=Number(no11)
// let opr=prompt("enter operator")
// let no2=prompt("enter 2nd no")
// no2=Number(no2)
// switch(opr){
//         case"+":
//         console.log(no11+no2)
//         break;
//         case"_":
//         console.log(no11_no2)
//         break;
//         case"*":
//         console.log(no11*no2)
//         break;
// }
/* The code `let ab = 10; console.log(`hello my name is eesha alam and my age is `);` is declaring
a variable `ab` with a value of 10 using the `let` keyword. Then it uses a template literal to log a
message to the console. The template literal includes the variable `ab` inside `${}` which allows
the value of `ab` to be inserted into the string when it is logged to the console. So, the output of
this code will be: "hello my name is eesha alam and my age is 10". */
let ab = 10;
console.log(`hello my name is eesha alam and my age is ${ab}`)
/* The code snippet is iterating over each character in the string "12345" stored in the variable
`naame`. It uses a `for` loop to loop through each character of the string based on the length of
the string. */
let naame = "12345";

for(let a=0;a< naame.length;a++){
    console.log(naame[a])
}
/* The code snippet is creating an array named `arra` containing elements `1, 2, 3, 4, "amara"`. Then,
it uses a `for...of` loop to iterate over each element of the `arra` array. During each iteration,
the current element is stored in the variable `an`, and then it is logged to the console using
`console.log(an)`. */
let arra=[1,2,3,4,"amara"]
for(let ac of arra){
    console.log(ac)
}
/* The code snippet is creating an object named `obje` with properties `name`, `Fname`, `Class`, and
`RollNo`. It then iterates over the keys of the `obje` object using a `for...in` loop. During each
iteration, the variable `ab` represents the key of the current property being accessed. The
`console.log(obje[ab])` statement logs the corresponding value of each property in the object to the
console. */
let obje = {
    name: "amara",
    Fname: "Saeed",
    Class: "BsIt",
    RollNo: 12
}
console.log(Object.values(obje))
console.log(Object.keys(obje))
let data = Object.values(obje)
let ki = Object.keys(obje)
for (let n = 0; n < ki.length; n++) {
    console.log(ki[n]+": " + data[n])
}

for (let ab in obje){
    console.log(obje[ab])
}
let arr = [1, 2, 3, "eesha", "amra"]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])