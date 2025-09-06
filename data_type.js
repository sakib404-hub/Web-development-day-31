/**
 * Js is a dynamic typed programming language therefore
 * when we create a variable and store some values
 * the variable automatically understand what will be the typeof of it
 */
let value = 4;
console.log(typeof value);
value = "My Name is Shakib";
console.log(typeof value);
value = false;
console.log(typeof value);
value = {
  name: "Vanggi",
  price: 40,
};
console.log(typeof value);

value = null;
console.log(typeof value);
value = undefined;
console.log(typeof value);

/**
 * JS primitive datatype
 */

const price = 50;
const name = "Bulbul";
const isPoor = false;
let isKnown = undefined; //Ususally we should not save or store the value to undefined
let somthing = null;
//Kono kichur value set na korle seta autometically undefined set hoye jai
let isLocal;
console.log(isLocal);

/**
 * Non Primitive Data Type
 */

const student = {
  name: "Chulbul",
  localtion: "Dhanmondi 32",
  subject: "botani",
};
const friends = ["Tom", "Oggy", "Olivia", "Bob", "Jack"];
