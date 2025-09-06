/**
 * Undefined --> meaning its not defined
 * when we pass argumnets to a function if we do not give enough arguments it will give us undefined
 * when we declear a varibale but do not set any value it gives us undefined
 * when we do not return any value from the function but asks the function if it has it
 * then it also gives us undefined
 */

let money;
console.log(money);

function total(a, b) {
  console.log(`value of the peramaters, a is ${a} and b is ${b}`);
  const sum = a + b;
  console.log(`Total is : ${sum}`);
}

// total(1);
const result = total(5, 7);
console.log(result);

function total2(numberOne, numberTwo) {
  if (numberOne === undefined || numberTwo === undefined) {
    return;
  }
  if (numberOne && numberTwo) {
    const sum = numberOne + numberTwo;
    return sum;
  }
}

const result2 = total2(2);
console.log(`Total 2 is : ${result2}`);

const phone = {
  brand: "Samsu",
  price: 130000,
};
console.log(phone.price);
console.log(phone.color);

const banks = ["Sonali", "Rupali", "Jomuna"];
delete banks[2]; //new ways of deleting from an array
console.log(banks[0]);
console.log(banks[1]);
console.log(banks[2]);
console.log(banks[3]);
//Nije kokhono undefined value hiseb e set korbo na
//jaiga jiga theke undefined aste pare but nije kokhone value hiseb e undefined set korbo na
console.log("Type of undefined :", typeof undefined);
console.log("Type of Null is : ", typeof null);
