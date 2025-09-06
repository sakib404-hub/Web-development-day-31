//All primitive values
//all the primitive data types are passed by values
function multiply(x, y) {
  x += 5;
  y += 5;
  const result = x * y;
  return result;
}

const a = 6;
const b = 9;
console.log(`Before the function call a is ${a} b is ${b}`);

const result = multiply(a, b);
console.log(result);
console.log(`After the function call a is ${a} b is ${b}`);

/**
 * now going through the non_primitive data type
 * Non primitive data types are passed by the references
 * there when we change it the outter or the main value will also be changed
 */

const manik = { name: "manik", money: 5000 };
const roton = { name: "ratan", money: 40000 };
// console.log(
//   `Before Function call \n manik is : ${manik} \n Roton is : ${roton}`
// );
console.log("Before the call : ");
console.log("Manik is : ", manik);
console.log("Roton is : ", roton);

function totalMoney(personOne, personTwo) {
  personOne.money = 0;
  personTwo.money = personTwo.money / 2;
  const total = personOne.money + personTwo.money;
  return total;
}

const balance = totalMoney(manik, roton);
console.log(`Balance is : ${balance}`);

console.log("After the function call : ");
console.log("Manik is : ", manik);
console.log("Roton is : ", roton);
