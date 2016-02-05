describe("ReverseArraySpec", function() {
  describe("reverseArray", function() {
    it("creates a new array with same values but in a reverse way", function() {
      var array = [1, 2, 4, 'a', 'd'];
      expect(reverseArray(array)).toEqual(['d', 'a', 4, 2, 1]);
    });
  });

  describe("reverseArrayInPlace", function() {
    it("updates the object to reverse one", function() {
      var arrayInPlace = [1, 2, 4, 'a', 'd'];

      expect(reverseArrayInPlace(arrayInPlace)).toEqual(['d', 'a', 4, 2, 1]);
    });
  });
});