/*
A List

Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with the
array). A list is a nested set of objects, with the first object holding a reference
to the second, the second to the third, and so on.

var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

Write a function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as an argument, and write a listToArray
function that produces an array from a list.
Also write the helper functions
prepend, which takes an element and a list and creates a new list that adds
the element to the front of the input list, and nth, which takes a list and a
number and returns the element at the given position in the list, or undefined
when there is no such element.
If you haven’t already, also write a recursive version of nth.
*/

function prepend(element, rest) {
  return { value: element, rest: rest }
};

function arrayToList(array) {
  var list = null;

  for (var i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  };

  return list;
};

/* ############################################################ */

function handle(list, array) {
  array.push(list.value);

  if(list.rest != null && typeof(list.rest) == 'object') {
    handle(list.rest, array);
  };

  return array;
}

function listToArray(list) {
  var array = [];

  return handle(list, array);
};

// Outputs

console.log(" ************ Array To List ***********");
arr = [1, 2, 3];
obj = arrayToList(arr);
console.log("Input => ", arr);

console.log("Responses: ");
console.log("First", obj.value, obj.rest);
console.log("Second", obj.rest.value, obj.rest.rest);
console.log("First", obj.rest.rest.value, obj.rest.rest.rest);

console.log(" **************** List To Array ***************");

var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
console.log("Input -> ", list);
console.log("Response: ");
console.log(listToArray(list));
