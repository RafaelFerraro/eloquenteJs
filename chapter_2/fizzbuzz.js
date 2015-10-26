/*  
  FizzBuzzWrite a program that usesconsole.logto print all the numbers from 1 to 100,
  with two exceptions. For numbers divisible by 3, print"Fizz"instead of thenumber, 
  and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
  When you have that working, modify your program to print"FizzBuzz"for numbers that are divisible by both 3 and 5.
  (This is actually an interview question that has been claimed to weedout a significant percentage of programmer candidates. 
  So if you solved it,you’re now allowed to feel good about yourself.)
*/

function fizzBuzz() {
  for(var x = 0; x <= 100; x++) {
    printHandler(x);
  };
};

function isDivisibleByThreeAndFive(value) {
  return (value % 3 == 0) && (value % 5 === 0)
};

function isDivisibleByThree(value) {
  return value % 3 === 0;
};

function isDivisibleByFive(value) {
  return value % 5 === 0;
};

function printer(value) {
  console.log(value);
};

function printHandler(value) {
  if(isDivisibleByThreeAndFive(value)) {
    printer("FizzBuzz");
  } else if(isDivisibleByThree(value)) {
    printer("Fizz");
  } else if(isDivisibleByFive(value)) {
    printer("Buzz");
  } else {
    printer(value);
  };
};

fizzBuzz();