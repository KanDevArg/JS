console.log('intro javascript')
let café =1;
console.log(café);
console.log("caf\u00e9");
console.log("caf\u{E9}");
console.log("\u{1F600}"); 


// //factory functilet x = 0                         // Semicolon omitted here;[x,x+1,x+2].forEach(console.log)on, to produce objects. Camel Notation
// const circle1 = createCircle(2);
// function createCircle(radius) {
//   return {
//     radius,

//     draw() {
//       console.log("Draw", this.radius);
//     },
//   };
// }
// console.log(circle1);
// circle1.draw();

// //Constructor Function. Pascal Notation
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("Draw", this.radius);
//   };
//   //return this; //optional
// }
// const circle2 = new Circle(44);
// circle2.draw();

// const Circle2 = new Function(
//   "r1",
//   `
//   this.radius = r1;
//   this.draw = function () {
//     console.log("Draw", this.radius);
//   };
// `
// );

// const newCircle = new Circle2(176);
// newCircle.draw();
// console.log("newCircle", newCircle);

// const copyOfnewCircle = Object.assign({}, newCircle);
// console.log("Copy of newCircle", copyOfnewCircle);

// const copyOfNewCircle2 = { ...newCircle };
// console.log("Copy of newCircle 2", copyOfNewCircle2);

// for (const key in newCircle) {
//   console.log(key);
// }

// for (const key in Object.entries(newCircle)) {
//   console.log(key);
// }

// console.log(Object.keys(newCircle));

// console.log(Object.entries(newCircle));

// console.log("color" in newCircle ? "yes" : "false");

// var numbers = [1, 2, 2, 3];

// myFunction = (num) => {
//   return num * 10;
// };
// var newarray = numbers.map(myFunction);

// console.log(newarray);

// var func = (val) => {
//   return 'Hello ' + val;
// };

// console.log(func('hola'));

// console.log(numbers.valueOf());

//function declaration

// const message = 'nada';

// function start() {
//   var message = 'start';
//   console.log(message);
// }

// start();

// {
//   let message2 = 'nada2';

// }
