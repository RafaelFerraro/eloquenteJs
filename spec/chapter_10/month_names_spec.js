describe("monthNames", function() {
  describe(".name", function() {
    it("returns the name of month according to number as argument", function() {
      expect(monthNames.name(0)).toEqual("January");
      expect(monthNames.name(1)).toEqual("February");
      expect(monthNames.name(2)).toEqual("March");
      expect(monthNames.name(3)).toEqual("April");
      expect(monthNames.name(4)).toEqual("May");
      expect(monthNames.name(5)).toEqual("June");
      expect(monthNames.name(6)).toEqual("July");
      expect(monthNames.name(7)).toEqual("August");
      expect(monthNames.name(8)).toEqual("September");
      expect(monthNames.name(9)).toEqual("October");
      expect(monthNames.name(10)).toEqual("November");
      expect(monthNames.name(11)).toEqual("December");
    });
  });

  describe(".number", function() {
    it("returns the number of the month", function() {
      expect(monthNames.number("January")).toEqual(0);
      expect(monthNames.number("February")).toEqual(1);
      expect(monthNames.number("March")).toEqual(2);
      expect(monthNames.number("April")).toEqual(3);
      expect(monthNames.number("May")).toEqual(4);
      expect(monthNames.number("June")).toEqual(5);
      expect(monthNames.number("July")).toEqual(6);
      expect(monthNames.number("August")).toEqual(7);
      expect(monthNames.number("September")).toEqual(8);
      expect(monthNames.number("October")).toEqual(9);
      expect(monthNames.number("November")).toEqual(10);
      expect(monthNames.number("December")).toEqual(11);
    });
  });
});