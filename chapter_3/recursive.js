/* 
  Recursion

  We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd 
  by using % 2 to check whether it’s divisible by two. 
  Here’s another way to define whether a positive whole number is even or odd: 
  •Zero is even.
  •One is odd.
  •For any other number N, its evenness is the same as N - 2. 

  Define a recursive function isEven corresponding to this description. 
  The function should accept a number parameter and return a Boolean.
  Test it on 50 and 75. See how it behaves on - 1. 
  Why? Can you think of a way to fix this?

  write a recursive function that receive one param
  its function should return true if that param is even
  and false value if that is odd

  The way that its function should work is N - 2 until this value are 0 or 1
  After that, make a test with N -1
*/
function Recursive() {
  this.showResult = function(number) {
    return number == 0;
  };

  this.handleValue = function(number) {
    if(number == 0 || number == 1){
      return this.showResult(number);  
    } else {
      return this.handleValue(number - 2);
    };
  };  

  this.isEven = function(number) {
    if(typeof(number) == 'number') {
      return this.handleValue(number);
    };
  };
};

var recursive = new Recursive();
console.log("75 is even ? " + recursive.isEven(75));
console.log("50 is even ? " + recursive.isEven(50));