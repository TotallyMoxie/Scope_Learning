//scope
/* let game = 'Sonic'; //global variable

console.log(game);

function title() {
  console.log(`${game}`);
}

title();

if(true) {
  console.log(`${game}`);
} */

/* function a() {
  let game = 'Sonic'; */ //local variable, if console.log(game) is outside the function it will not work. Also known as functional scope
/*   console.log(game);
} */

/* if(true) {
  console.log(game); //not defined
} */

/* a();

if(true) {
  let game = 'Mario';
  console.log(game);
} */
//local scope is less prone to errors

/* function hello() {
  var greeting = 'hello';
} */
//console.log(greeting); //not defined


/* if(true) {
  var greeting = 'hello';
} */
//console.log(greeting); //hello

/* var x =10;
console.log(x);

if(true) {
  var x = 2;
  console.log(x);
} */

//console.log(x); //2   this is an example of name clash. if we change var to let, the value of x will be 10, 2, 10

//task 1
/* let firstName = 'John';
let lastName = 'Smith';
let age = 28;

function user() {
  console.log( `${firstName} ${lastName} is ${age} years old.`);
}
user(); */

//task 2
/* function user() {
  let firstName = 'John';
  let lastName = 'Smith';
  let age = 28;
  let country = 'England';
  console.log( `${firstName} ${lastName} is ${age} years old and lives in ${country}.`);
}
user(); */

//task 3
function user() {
  let firstName = 'John';
  let lastName = 'Smith';
  let age = 28;
  let country = 'England';
  console.log( `${firstName} ${lastName} is ${age} years old and lives in ${country}.`);
}

let firstName = 'James';

user();

//task 4
let game = 'Sonic';

if(true) {
  let game = 'Mario';
  console.log(game);
}

console.log(game);