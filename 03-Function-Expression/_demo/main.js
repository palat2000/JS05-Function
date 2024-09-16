//IIFE : intermediate Invoke Function Expression
(function (x, y) {
  console.log(x + y);
})(5, 10);

// func("Hello world+++++++");

//########################################
const myFunc = function (msg) {
  console.log(msg);
  return msg;
};
console.log(myFunc("Hello world"));

//#########################################
// function func (msg) {
//     console.log(msg);
// }

//#################################
//shortest
const a = x => x ** 2;
console.log(a(5));
