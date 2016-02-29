var ancestry    = JSON.parse(ANCESTRY_JSON),
    people      = {},
    listOfAges  = [];

function storagePeople() {
  ancestry.forEach(function(person) {
    people[person.name] = person;
  });
};

function includeAgeIntoList(person) {
  var bornMother = people[person.mother].born;
  var ageMother  = person.born - bornMother;

  listOfAges.push(ageMother);
};

function getAges() {
  ancestry.forEach(function(person) {
    if (people[person.mother] != undefined) {
      includeAgeIntoList(person)
    };
  });
};

function agesTotal() {
  return listOfAges.reduce(function(previous, current) {
    return previous + current;
  });
};

function execAverageCalc() {
  storagePeople();

  getAges();

  var average = agesTotal() / listOfAges.length;

  return Math.floor(average);
};

console.log(execAverageCalc()); // => 31