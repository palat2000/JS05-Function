/*
### การเขียนฟังก์ชันมี 2 แบบหลักๆ

1. Function Declaration / Named Function
2. Function Expression / มักจะถูกเขียนในรูปของ Anonymous Function
*/

// 1 Define
// function sayHi(name) {
//     console.log(`Hello ${name}`);
// }

// 2 Call
// sayHi("pond");

function add (x,y){
    return x+y;
}

let a = add(10,5);
console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(a);//run ฟังก์ชันครั้งเดียว
console.log(add(10,5));
console.log(add(10,5));
console.log(add(10,5));
console.log(add(10,5));
console.log(add(10,5));
console.log(add(10,5));//run ฟังก์ชันทุกครั้ง