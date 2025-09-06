let data;
data = 0;
data = ""; //false means the totally empty string
data = " "; //but has a white space therefore it truthy
data = "0";
data = false;
data = false;
data = null; //definitely it will be false
data = {}; //empty object will return the truthy value
data = []; //empty array will return the truthy value

console.log(`Value of Data is : ${data}`);

if (data) {
  console.log(data, "value of data is Truthy");
} else {
  console.log(data, "value of data is : falsy");
}

/**
 * if i need to capture the falsy value to go inside the if block
 * using the logical not
 */
if (!data) {
  console.log(data, "value of data is Falsy");
} else {
  console.log(data, "value of data is : Truthy");
}

/**
 * Capturing all the positive values
 * Double not
 * capture any value to boolen(true and false)
 */
if (!!data === true) {
  console.log("The true value inside the double not");
}
