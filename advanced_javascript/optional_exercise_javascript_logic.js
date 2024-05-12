// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

const ArrayFromAbove = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function answer(array) {
  let brandNewArray = [];
  let createNestedArray = [];
  let arrangedArray = array.sort((a,b) => {
    return a - b;
  });
  let newArray = arrangedArray.sort((a,b) => {
    let difference = a - b;
    if (difference == 0 && createNestedArray.length == 0) {
      brandNewArray.splice(-1);
      createNestedArray.push(a);
      createNestedArray.push(b);
    } else if (difference == 0 && createNestedArray.length != 0) {
      createNestedArray.push(b);
    } else if (createNestedArray.length != 0) {
      brandNewArray.push(createNestedArray);
      brandNewArray.push(a);
      createNestedArray = [];
    } else {
      brandNewArray.push(a);
    }
  })
  return brandNewArray;
};

console.log(answer(ArrayFromAbove));

// Answer: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

function answer (givenArray, givenAnswer) {
  let s = new Set();
  for (let i = 0; i < givenArray.length; ++i) {
    let temp = givenAnswer - givenArray[i];
    if (s.has(temp)) {
      console.log(
        "Pair with given sum "
        + givenAnswer + " is (" + givenArray[i]
        + ", " + temp + ")");
    }
    s.add(givenArray[i]);
  }
};

function answer (givenArray, givenAnswer) {
  let s = [];
  for (let i = 0; i < givenArray.length; ++i) {
    let temp = givenAnswer - givenArray[i];
    if (s.includes(temp)) {
      console.log("[" + givenArray[i] + ", " + temp + "]");
    }
    s.push(givenArray[i]);
  }
};

answer([1,2,3], 4)
// [1,3]