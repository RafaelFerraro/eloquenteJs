describe("SumOfARange", function() {
  var start = 1,
      end   = 10;

  describe("Range", function() {
    it('returns an array containing all the number from start to end', function() {
      expect(range(start, end)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe("Sum", function() {
    it("returns a sum of each number included at an array", function() {
      expect(sum(range(start, end))).toEqual(55);
    });
  });
});