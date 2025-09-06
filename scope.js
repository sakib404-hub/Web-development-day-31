const name = "Tom Hanks";
//This a global scope variable meaning we can use it whereever whenever we want

//if bloack sacoped
if (true) {
  const value = 57;
  console.log(value);
  console.log(`Inside the block value is : ${value}`);
}
// console.log(value);

// block through for loop
const numbers = [1, 2, 3, 4, 5, 9];
for (const number of numbers) {
  console.log("This is also a block : ", number);
}

// block through function known as Function-Scope or Local-Scope
doMth(88, 999);
function doMth(x, y) {
  console.log(x, y);
  const sum = x + y;
  console.log(`Calling the doubleit Function : ${doubleIt(450)}`);
  // return sum;
  function doubleIt(x) {
    return x * 2;
  }
}

/**
 * Hoisting works in JavaScript, but with some limitations:
 * - If a function is defined inside another function, it can only be hoisted
 *   within that function’s scope. It cannot be accessed outside of it.
 * - This means a nested function is not available outside its parent function.
 *
 * Temporal Dead Zone (TDZ):
 * - Occurs when a variable is accessed before it is declared.
 * - In the TDZ, using the variable results in a ReferenceError.
 */

/**
 * Hoisting JavaScript এ কাজ করে, তবে কিছু সীমাবদ্ধতা আছে:
 * - যদি কোনো function এর ভেতরে আরেকটা function declare করা হয়,
 *   তাহলে সেটার hoisting শুধু সেই function এর scope এর মধ্যেই হবে।
 *   Function এর বাইরে সেটিকে access করা যাবে না।
 *
 * Temporal Dead Zone (TDZ):
 * - যখন কোনো variable declare করার আগে তাকে access করার চেষ্টা করা হয়,
 *   তখনই TDZ তৈরি হয়।
 * - এই অবস্থায় variable ব্যবহার করলে ReferenceError পাওয়া যায়।
 */

console.log(location);
let location = "Balur Ghat";
