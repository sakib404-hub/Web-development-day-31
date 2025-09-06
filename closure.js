function count() {
  let count = 0;
  // const numbers = [];
  // const people = {};

  function innerFunction() {
    console.log("This is the InnerFunction that someOne will call");
  }
  return innerFunction;
}

const output = count();
console.log(output());

function counter() {
  let count = 5;

  return function () {
    count += 1;
    // count = count + 1;
    console.log("Inside the Inner Function : ", count);
  };
}

const innerFunc = counter();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
innerFunc();
console.log(innerFunc());

const rahimCounter = counter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
console.log("----------------------");
const karimCounter = counter();
karimCounter();
karimCounter();
karimCounter();
karimCounter();
karimCounter();
karimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
