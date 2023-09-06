//Hoisting is JavaScripts default behavior of moving declarations to the top of their scope before code execution. In other words, a variable can be used before it has been declared.

//hello(); //error in function expression, until....

/* function hello() {
  console.log("hello");
} */

//hoisting moved declaration to the top of the scope only.

// Decleration
/* let game ;
console.log(game);  *///undefined

// Initialization
/* game = "Super Mario";
console.log(game); */ //Super Mario

//variable hoisting
//console.log(typeof num); //undefined

//JS Variable Lifecycle

//1. Declaration - var author; only var is hoisted
//2. Initialization - author = 'C.S Lewis';
//3. Usage - console.log(author);

/* lion("Aslan");

function lion(name) {
  console.log(`The lion's name is ${name}`);
} */

//task 1
book('The Magicians Nephew');

function book(title) {
  console.log(`The book's title is ${title}`);
}
//expected outcome: The book's title is The Magicians Nephew

//task 2 fix the code
/* console.log(book);

let book = 'The Silver Chair'; // uncaught reference error */

book('The Silver Chair');

function book(title) {
  console.log(`The book's title is ${title}`);
} //expected outcome: The book's title is The Silver Chair <--my answer
//real answer
let book = 'The Silver Chair';
console.log(book);