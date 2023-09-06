// four types of scope: global, function, block, module

// global scope
 //can be accessed anywhere in the code, even other files

//module scope
   // can be accessed anywhere in the file, but not outside of it unless there is a module.exports

//block scope
  // can be accessed anywhere in the block, but not outside of it

  function test() {
    const b = 2

    if (true) {
      const c = 3 //block scope
      console.log (b,c) // 2,3
    }
  }

  test() // 2,3
  //if you use var variables, they will be hoisted to the top of the function, so they will be accessible outside of the block