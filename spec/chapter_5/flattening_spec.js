describe('flattening', function() {
  it('receives an array of arrays and returns one array with all values', function() {
    var arrayOfArrays = [
      [1, 2, 3], ["e", "r", "t"], [1, "h", "a", 5]
    ];
    var response = [1, 2, 3, "e", "r", "t", 1, "h", "a", 5];

    expect(flattening(arrayOfArrays)).toEqual(response);
  });
});