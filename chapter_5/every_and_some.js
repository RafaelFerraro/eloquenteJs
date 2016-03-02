// Every and Then Some
// Arrays also come with the standard methods every and some . Both take a
// predicate function that, when called with an array element as argument, re-
// turns true or false. Just like && returns a true value only when the expressions
// on both sides are true, every returns true only when the predicate returns
// true for all elements of the array. Similarly, some returns true as soon as the
// predicate returns true for any of the elements. They do not process more el-
// ements than necessary—for example, if some finds that the predicate holds
// for the first element of the array, it will not look at the values after that.
// Write two functions, every and some , that behave like these methods,
// except that they take the array as their first argument rather than being a
// method.

function every(array, callback) {
  var result = true;

  for(var x = 0; x < array.length; x++) {
    if (!callback(array[x])) {
      result = false;
      break; // break doesn't work with forEach function
    };
  };

  return result;
};

function some(array, callback) {
  var result = false;

  for(var x = 0; x < array.length; x++) {
    if (callback(array[x])) {
      result = true;
      break;
    };
  };

  return result;
};