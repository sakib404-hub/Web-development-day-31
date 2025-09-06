const numbers = [1, 4, 10, 2, 22, 90, 78, 67, 55, 88, 48];

// Array Mapping
const doubledNumber = numbers.map((element) => {
  return element * 2;
});
console.log(`Double of every number is : ${doubledNumber}`);

// Array for each
numbers.forEach((element, index) => {
  console.log(
    `Multiplication of : ${element} and ${index} is : `,
    element * index
  );
});

// Filter
const arrayGreaterThenTen = numbers.filter(
  (element) => element > 10 && element < 90
);
console.log(arrayGreaterThenTen);

// Find
const number = numbers.find((element) => element > 40);
console.log(number);

const total = numbers.reduce((accumulator, element, index) => {
  return (accumulator += element);
}, 0);
console.log(total);
