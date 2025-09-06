/**
 * TRIPPLE EQUAL always do the things below
 * first check the type of the two if they are different therefore the value is different
 * therefore comes the second part if the type of the both is same now it checks for the values
 * of the two if it is same therefore it returns true or excute the block of the code
 */
console.log(2 === 2);
console.log(2 === 1);
console.log(true === 1);
console.log(false === 0);
console.log(null === undefined);
console.log(0 === "");
// console.log([] === "");
console.log(2 === "2");
console.log("-----------------");

/**
 * Double equl has a deepder meaningfull name
 * type coersion ----> converting the types of the things
 * if one value is string and another is number : converts string to number then it compare themselves
 * if one is boolean and another is number :  converts boolean to number
 * if one is object and another is string : therefore the object is converted to string them compare themselves
 *
 */

console.log(2 == 2);
console.log(2 == "2");
console.log("1" == 1);
console.log(2 == "12");
console.log(true == 1);
console.log(true == "1");
console.log(false == 0);
console.log(null == undefined);
console.log(NaN == NaN);
console.log([] == "");
console.log([5] == "5");
console.log([5].toString());
console.log([] == []);
console.log({} == {});
const p = [4, 5, 6, 7];
const q = p;
console.log(p == q);
