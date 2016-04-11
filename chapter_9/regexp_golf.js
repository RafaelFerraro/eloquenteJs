function catAndCar(phrase) {
  return /cat|car/.test(phrase);
};

function popAndProp(phrase) {
  return /pr?op/.test(phrase);
};

function ferrSomething(phrase) {
  return /ferr(et|y|ari)/.test(phrase);
};

function ious(phrase) {
  return /.ious\b/.test(phrase);
};

function whitespaceMoreCharacter(phrase) {
  return /\s(.|,|:|;)/.test(phrase);
};

// verify whether has a word with six or more letters
function sixOrMoreLetters(phrase) {
  return /([a-z]){6,}/.test(phrase);
};

// returns all letters that hasn't e
function withoutE(phrase) {
  return phrase.match(/[^e]/gi);
};