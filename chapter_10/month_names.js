// creating the module
var monthNames = function() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return {
    name: function(number) {
      return months[number];
    },
    number: function(name) {
      return months.indexOf(name);
    }
  };
}();