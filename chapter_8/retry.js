// creates an exception object
function MultiplicatorUnitFailure(message) {
  this.message = message;
};

// sets a prototype to that exception object
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);

function primitiveMultiply(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    throw new MultiplicatorUnitFailure("Any of these numbers aren't a number !");
  };

  return n1 * n2;
};

function multiply(n1, n2) {
  try{
    var result = primitiveMultiply(n1, n2);
    console.log(result);
  }catch(e) {
    if (e instanceof MultiplicatorUnitFailure) {
      console.log(e.message)
    } else {
      throw(e);
    };
  }
};

multiply(10, 10);
multiply("a", "l");