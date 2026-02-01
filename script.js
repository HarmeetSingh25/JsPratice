console.log(`My name is Harmeet and my hobby is Do coding`);

console.log(45 * 2 - 10);

let year = new Date();
console.log(year.getFullYear());

let firstname = "Harmeet";
let lastname = "singh";
console.log(firstname + " " + lastname);

var a = 10;
console.log(a);
var a = 15;
console.log(a);

console.error("this is error");

let square = 12;
console.log(square * square);

if (1) console.log(true);

// let age =Number(prompt("Enter your age "))
// if(age>=18)console.log(age);
// else{
//     console.log("you age is less than 18");

// }

console.log(100 / 0);

// ## 2. Variables and Data Types (10 Questions)

let a2 = "hello";
console.log(a2);

const pi = Math.PI;
console.log(pi);

let val13 = 12;
console.log(val13);
val13 = 13;
console.log(val13);

console.log(typeof null);

let val15 = "25";
console.log(typeof val15);

console.log(typeof true);

let val17 = "harmeet";
let age = 22;
let bol = true;
console.log(val13, age, bol);

let val18;
console.log(val18);

let val19 = undefined;
console.log(typeof val19);

// const val20=[1,2,3,4]
// console.log(val20);
// val20=[]
// console.log(val20);

// ## 3. Loops (10 Questions)

for (let i = 0; i <= 50; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let of = "javascro[t";
for (let element of of) {
  console.log(element);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

let val25 = 5;
do {
  console.log(val25);
  val25--;
} while (val25 > 0);

let val26 = 1;
for (let i = 2; i <= 5; i++) {
  val26 *= i;
  console.log(val26);
}
//  27


let arr = [1, 2, 3, 4];
let arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
  arr1.push(arr[i]);
}
// console.log(arr1);

let val29=1
while (val29<=100) {
    if (val29%5===0) {
        console.log(val29)
    }
   
    val29++
}


let obj30={
    name :"Harry",
    age:22,
    study:"BCA"
}
for (let key in obj30) {

    console.log(key ,obj30[key]);
    
    
}

// ## 4. Arrays (10 Questions)
