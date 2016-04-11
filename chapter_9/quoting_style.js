describe("quoting_style.js", function() {
  it("replaces all single quotation marks to double quotes", function() {
    var string = "We're in 'anyplace'.";

    expect(singleToDouble(string)).toEqual("We're in \"anyplace\".");
  });
});