//closures in javascript are when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

/* const */ /* let myName = 'Shaina';

function printName() {
  console.log(myName);
} 

myName = 'Shay';

printName(); 

myName = 'Joe';

printName();  */

/* function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside'); */

function outerFunction(url) {
  fetch(url).then(() =>{
    console.log(url);
  })
}

const newFunction = outerFunction('outside');
newFunction('inside');