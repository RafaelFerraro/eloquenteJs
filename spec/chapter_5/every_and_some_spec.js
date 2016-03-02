function isBiggerThanTen(element) {
  return element > 10;
};

describe("every", function() {
  describe("when all values return true for callback", function() {
    var array = [11, 15, 30, 50];

    it("returns true", function() {
      var response = every(array, isBiggerThanTen);
      expect(response).toBe(true)
    });
  });

  describe("when any value doesn't match with callback", function() {
    var array = [30, 40, 3, 34];

    it("returns false", function() {
      var response = every(array, isBiggerThanTen);
      expect(response).toBe(false);
    });
  });
});

describe("some", function() {
  describe("when any element returns true from callback", function() {
    var array = [0, 3, 10, 13, 2, 8];

    it("returns true", function() {
      var response = some(array, isBiggerThanTen);
      expect(response).toBe(true);
    });
  });

  describe("when no one element returns true from callback", function() {
    var array = [0, 1, 2, 3, 4, 5];

    it("returns false", function() {
      var response = some(array, isBiggerThanTen);
      expect(response).toBe(false);
    });
  });
});