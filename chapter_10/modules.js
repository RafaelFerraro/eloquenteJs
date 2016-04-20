var nameModule = function() {
  var names = ["Rafael", "Sara", "Kevin"];

  return function(index) {
    return names[index];
  };
}();

console.log("*************************");
console.log(nameModule(0));
console.log("*************************");

var weekDay = function() {
  var days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  // when call weekDay, this one returns this object
  return {
    name: function(number) { return days[number]; },
    number: function(name) { return days.indexOf(name); }
  };
}();

console.log("*************************");
console.log(weekDay.name(2));
console.log(weekDay.number("Monday"));
console.log("*************************");

// using exports
(function(exports) {
  var names = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  exports.name = function(number) {
    return names[number];
  };

  exports.number = function(name) {
    return names.indexOf(name);
  };
})(this.weekDayExport = {});

console.log("*************************");
console.log(weekDayExport.name(2));
console.log(weekDayExport.number("Monday"));
console.log("*************************");

// Evaluate data as code
// Function constructor
var plusTwo = new Function("firstArgument", "return firstArgument + 2;");

console.log("*************************");
console.log(plusTwo(10)); // should return 12;
console.log("*************************");

