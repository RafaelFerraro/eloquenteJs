// constructor
function Rabbit(type) {
  this.type = type;
};

Rabbit.prototype.speak = function(text) {
  console.log(this.type + " said: " + text);
};

var blackRabbit = new Rabbit('Black');
var whiteRabbit = new Rabbit('White');

blackRabbit.speak("I am a black rabbit");
whiteRabbit.speak("I am a white rabbit");


function Human(name) {
  this.name = name;

  function walk(street) {
    console.log(this.name + "is walking for " + street + " street.")
  };
};

var jack = new Human("Jack");
// It doesn't work !!!
jack.walk("Alone");