/*
  Minimum
  The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

var isNumber = function(value) {
  return typeof(value) == "number";
};

var findMinor = function(first, second) {
  return (first < second) ? first : second;
};

var isEqual = function(first, second) {
  return first == second;
};

var minimum = function(first, second) {
  if (!isNumber(first) || !isNumber(second)) {
    return "Please, give me a number!";
  } else {
    return isEqual(first, second) ? "Are Equals !" : findMinor(first, second);
  };
};