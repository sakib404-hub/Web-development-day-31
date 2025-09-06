function addition(a, b) {
  console.log(a, b);
  /**
   * arguments is an array like object
   * therefore it can only be used in the normal function not the arrow function
   * arguments হলো একটা array-like object যা function এর ভিতরে automatically পাওয়া যায়।
   * এর মধ্যে function এ যে parameter (argument) pass করা হয়েছে, সেগুলো সব থাকে।
   */
  console.log(arguments);
  const peraMeter = [...arguments];
  console.log(peraMeter);
}

addition(90, 999, 22, 33);

function showArgs(...args) {
  console.log(args);
  console.log(args.length);
}
showArgs(90, 89, 28, 22);
