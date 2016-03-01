var
  ancestry       = JSON.parse(ANCESTRY_JSON),
  centuries      = {}, // object that keys are the century and values are the people
  sumAgesCentury = {}; // object that keys are the century and values are ages

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

// armazena um objeto sendo que a chave é o seculo e seu valor é um array
// contendo todas as idades
function peopleAgeInCentury(century) {
  centuries[century].forEach(function(person) {
    sumAgesCentury[century].push(person.died - person.born)
  });
};

// soma todas as idades por século
function sumAgesByCentury(century) {
  return sumAgesCentury[century].reduce(function(prev, curr) {
    return prev + curr;
  });
};


function lifeExpectancy() {
  // populates the centuries object
  centuryWrapper();

  for (var century in centuries) {
    // sets a initial value for each century on sumAgesCentury object
    sumAgesCentury[century] = [];

    peopleAgeInCentury(century);

    var ageTotal = sumAgesByCentury(century);
    var average  = Math.floor(ageTotal / centuries[century].length);

    console.log(
      "The life expectancy for ancestry at century " + century + " is " + average
    )
  };
}

lifeExpectancy();