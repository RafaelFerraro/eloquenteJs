/*
  Reversing an Array
  Arrays have a method reverse, which changes the array by inverting the
  order in which its elements appear. For this exercise, write two functions,
  reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
  as an argument and produces a new array that has the same elements in
  the inverse order. The second, reverseArrayInPlace, does what the reverse
  method does: it modifies the array given as argument in order to reverse
  its elements. Neither may use the standard reverse method.
  Thinking back to the notes about side effects and pure functions in the
  previous chapter, which variant do you expect to be useful in more situations?
  Which one is more efficient?
*/

function reverseArray(array) {
  var newArray = [];

  while(array.length > 0) {
    var lastIndex = array.length - 1;

    // add the last array element into at first position of new array
    newArray.push(array[lastIndex]);

    // removes the last element of array
    array.pop();
  }

  return newArray;
};

function reverseArrayInPlace(array) {
  var sizeArray = array.length;
  var lastIndex = sizeArray - 1;

  for(x = 0; x < lastIndex; x++) {
    // it inserts the array[x] at same position of sizeArray
    // splice(index, 0, value);
    array.splice(sizeArray, 0, array[x]);
  };

  // removes all values before index
  // [1, 2, 3, 4].slice(2); => [3, 4]
  array = array.slice(lastIndex);
  return array;
};

// console.log("**** Reverse Array ****")
// console.log(reverseArray(['a', 'b', 'c', 'd', 'e', 'f'])) // => ['e', 'f', 'd', 'c', 'b', 'a']
// console.log(reverseArray([10, 20, 50, 120])) // => [120, 50, 20, 10]
// console.log(reverseArray(['banana', 'maça', 'pera', 'goiaba'])) // => ['goiaba', 'pera', 'maça', 'banana']

// console.log("***** Reverse Array In Place ******")
// console.log(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e', 'f'])) // => ['e', 'f', 'd', 'c', 'b', 'a']
// console.log(reverseArrayInPlace([10, 20, 50, 120])) // => [120, 50, 20, 10]
// console.log(reverseArrayInPlace(['banana', 'maça', 'pera', 'goiaba'])) // => ['goiaba', 'pera', 'maça', 'banana']