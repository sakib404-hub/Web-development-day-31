//callback

function pakhiBhai(callMeBack, patro, patri) {
  console.log("vaue of patro is : ", patro);
  console.log("Call me back :", callMeBack);
  if (patri) {
    // console.log("Call me Back");
    callMeBack(patro);
  } else {
    console.log("Tor kopale Biya nai");
  }
}

// pakhiBhai();

function callSomeOne(person) {
  console.log("Calling : ", person);
}
// callSomeOne("jodu");

pakhiBhai(callSomeOne, "jodu", "Ms Modhu");

//This is one kind of callback function (calling back the function)
// addEventListener("click", () => {});

const numbers = [1, 2, 4, 5, 6, 7, 10];
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

const addFive = (x) => x + 5; //function add five ---> creating addfive function
const elected = [1, 2, 3, 4, 5, 6].map(addFive);
console.log(elected);

/**
 * lets build a callback function where it will be called back when it found its gof
 */

function gfFinder(callBackBoy, boy, girl) {
  // console.log("okey here i am : ", callBackBoy);
  // console.log("Here I am : ", boy);
  if (girl) {
    // console.log("I find your GirlFriend Congratulation");
    callBackBoy(boy);
  }
}

function callBackToBoyfriend(boy) {
  console.log("Calling you back : ", boy.toUpperCase());
}

gfFinder(callBackToBoyfriend, "Shakib", "chamily");
