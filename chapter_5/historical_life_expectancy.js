
  // ********* Historical Life Expectancy ************
  // When we looked up all the people in our data set that lived more than
  // 90 years, only the latest generation in the data came out. Let’s take a closer
  // look at that phenomenon.
  // Compute and output the average age of the people in the ancestry
  // data set per century. A person is assigned to a century by taking their year
  // of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died /
  // 100).

var
  ancestry  = JSON.parse(ANCESTRY_JSON),
  centuries = {}; // object that keys are the century and values are the people

/*
  handle an object to include correct values for this
*/
function includeCenturyValues(object, century, value) {
  if (object[century] == null || object[century] == undefined) {
    object[century] = [value]
  } else {
    object[century].push(value)
  }
};

/*
  verify if have already any person in the century or not
  if have, just include a new value to this, if not, initialize it ;)
*/
function groupPeopleByCentury(century, person) {
  includeCenturyValues(centuries, century, person);
};

/*
  populates the century object
  where the key is the century value as a integer
  and the body/value is a list of people lived in it
*/
function centuryWrapper() {
  ancestry.forEach(function(person) {
    var century = Math.ceil(person.died/100);

    groupPeopleByCentury(century, person);
  });
};

/*
  catch each person by century and calculate your living time.
  includes this value into an array, based on century =)
*/
function agesByCentury(century, callback) {
  var ages = {};

  centuries[century].forEach(function(person) {
    includeCenturyValues(ages, century, (person.died - person.born))
  });

  return ages;
};

function increment(prev, curr) {
  return prev + curr;
};

function sumAgesByCentury(ages, century, callback) {
  var total = ages[century].reduce(increment);

  callback(total);
};

function averageCalc(century, value) {
  var average  = Math.floor(value / centuries[century].length);

  console.log(
    "The life expectancy for ancestry at century " + century + " is " + average
  );
};

function expectancyCalc(century) {
  var ages = agesByCentury(century);

  sumAgesByCentury(ages, century, function(total) {
    averageCalc(century, total);
  });
};

function lifeExpectancy() {
  centuryWrapper();

  for (var century in centuries) {
    expectancyCalc(century);
  };
};

lifeExpectancy();

  // output - result

  // The life expectancy for ancestry at century 16 is 43
  // The life expectancy for ancestry at century 17 is 51
  // The life expectancy for ancestry at century 18 is 52
  // The life expectancy for ancestry at century 19 is 54
  // The life expectancy for ancestry at century 20 is 84
  // The life expectancy for ancestry at century 21 is 94
