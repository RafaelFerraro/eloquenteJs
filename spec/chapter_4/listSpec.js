describe("List", function() {
  describe("arrayToList", function() {
    it("converts an array to a list", function() {
      var array = [1, 2, 3];
      var list  = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

      expect(arrayToList(array)).toEqual(list);
    });
  });

  describe("listToArray", function() {
    it('converts a list to an array', function() {
      var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };

      expect(listToArray(list)).toEqual([1, 2, 3]);
    });
  });
});