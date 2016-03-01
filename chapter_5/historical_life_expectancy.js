/*
  ********* Historical Life Expectancy ************
  When we looked up all the people in our data set that lived more than
  90 years, only the latest generation in the data came out. Let’s take a closer
  look at that phenomenon.
  Compute and output the average age of the people in the ancestry
  data set per century. A person is assigned to a century by taking their year
  of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died /
  100).
*/

var
  ancestry            = JSON.parse(ANCESTRY_JSON),
  centuries           = {}, // object that keys are the century and values are the people
  peopleAgesByCentury = {}; // object that keys are the century and values are ages

/*
  populates the century object
  when the key is the century value as a integer
  and the body/value is a list of people lived in it
*/
function centuryWrapper() {
  ancestry.forEach(function(person) {
    var century = Math.ceil(person.died/100);

    if (centuries[century] == null || centuries[century] == undefined) {
      centuries[century] = [person];
    } else {
      centuries[century].push(person);
    };
  });
};

/*
  catch each person by century and calculate your living time.
  includes this value into an array, based on century =)
*/
function peopleAgeInCentury(century) {
  centuries[century].forEach(function(person) {
    peopleAgesByCentury[century].push(person.died - person.born)
  });
};

function increment(prev, curr) {
  return prev + curr;
};

function sumAgesByCentury(century, callback) {
  var total = peopleAgesByCentury[century].reduce(increment);

  callback(total);
};

function averageCalc(century, value) {
  var average  = Math.floor(value / centuries[century].length);

  console.log(
    "The life expectancy for ancestry at century " + century + " is " + average
  );
};

function lifeExpectancy() {
  centuryWrapper();

  for (var century in centuries) {
    peopleAgesByCentury[century] = [];

    peopleAgeInCentury(century);

    sumAgesByCentury(century, function(total) {
      averageCalc(century, total);
    });
  };
}

lifeExpectancy();

/*
  output - result

  The life expectancy for ancestry at century 16 is 43
  The life expectancy for ancestry at century 17 is 51
  The life expectancy for ancestry at century 18 is 52
  The life expectancy for ancestry at century 19 is 54
  The life expectancy for ancestry at century 20 is 84
  The life expectancy for ancestry at century 21 is 94
*/