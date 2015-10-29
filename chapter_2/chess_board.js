/*
Write a program that creates a string that represents an 8x8 grid, using new-line characters to separate lines.
At each position of the grid there is either a space or a “#” character.
The characters should form a chess board. Passing this string to console.log should show something like this:

# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

When you have a program that generates this pattern,
define a variable size = 8 and change the program so that it works for anysize,
outputting a grid of the given width and height.
*/

var size = 8, character = "#", whitespace = " ", result = "", breakLine = "\n", storage = "";

function populateResult(value) {
  result = result.concat(value);
  if(value !== "\n") {
    storage = storage.concat(value);
  };
};

function divisibleBySize() {
  return ((storage.length % size) === 0) && (lastValue() !== breakLine);
};

function lastValue() {
  var lastIndex = result.length - 1;

  return result[lastIndex];
};

function isCharacter() {
  return lastValue() === character;
};

function isBreakLine() {
  return (lastValue() === breakLine);
};

function defineNextResultValue() {
  if(isCharacter()) {
    populateResult(whitespace);
  } else {
    populateResult(character);
  };
}

function replayLastToFirst() {
  var index = result.length - 2;

  populateResult(result[index]);
};

function handleValues() {
  if(isBreakLine()) {
    replayLastToFirst();
  } else {
    defineNextResultValue();
  };
};

function handleResultPositions() {
  if(divisibleBySize()) {
    populateResult(breakLine)
  } else {
    handleValues();
  };
};

function init() {
  for(var x = 1; x < (size*size); x++) {
    if(result.length === 0) {
      populateResult(character);
    } else {
      handleResultPositions();
    };
  };

    return result
};

console.log(init());