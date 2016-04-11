describe("catAndCar", function() {
  describe("when the phrase contains cat", function() {
    var phrase = "I had a cat, but it died in the last week";

    it("returns true", function() {
      expect(catAndCar(phrase)).toBe(true);
    });
  });

  describe("when the phrase contains car", function() {
    var phrase = "My dad give me a car";

    it('returns true', function() {
      expect(catAndCar(phrase)).toBe(true);
    });
  });

  describe("when no one that words are found", function() {
    var phrase = "My name is Rafael";

    it("returns false", function() {
      expect(catAndCar(phrase)).toBe(false);
    });
  });
}); // catAndCar

describe("popAndProp", function() {
  describe('when there are pop in the phrase', function() {
    it("returns true", function() {
      expect(popAndProp("ieodkflpopjefid")).toBe(true);
    });
  });

  describe('when there are prop in the phrase', function() {
    it("returns true", function() {
      expect(popAndProp("ieodkflpropjefid")).toBe(true);
    });
  });

  describe('when neither pop and prop are present in the phrase', function() {
    it("returns false", function() {
      expect(popAndProp("ieodkflporpjefid")).toBe(false);
    });
  });
}); // popAndProp

describe("ferrSomething", function() {
  describe("when there are ferret in the phrase", function() {
    it("returns true", function() {
      expect(ferrSomething("uiowrlksaferretjksdi")).toBe(true);
    });
  });

  describe("when there are ferry in the phrase", function() {
    it("returns true", function() {
      expect(ferrSomething("uiowrlksaferryjksdi")).toBe(true);
    });
  });

  describe("when there are ferrari in the phrase", function() {
    it("returns true", function() {
      expect(ferrSomething("uiowrlksaferrarijksdi")).toBe(true);
    });
  });

  describe("when there are just ferr in the phrase", function() {
    it("returns false", function() {
      expect(ferrSomething("uiowrlksaferrjksdi")).toBe(false);
    });
  });
}); //ferrSomething

describe("ious", function() {
  describe("when there are any word that ends with ious", function() {
    it("returns true", function() {
      expect(ious("has fuckious jeje")).toBe(true);
    });
  });

  describe("when there are a word that has ious in the begin", function() {
    it("returns false", function() {
      expect(ious("has iousfuck")).toBe(false);
    });
  });

  describe("when there are a word that has ious in the middle", function() {
    it("returns false", function() {
      expect(ious("has fuckiousfuck")).toBe(false);
    });
  });

  describe("when hasnt that word", function() {
    it("returns false", function() {
      expect(ious("has fuck")).toBe(false);
    });
  });
}); // ious

describe("whitespaceMoreCharacter", function() {
  describe("when has an whitespace with a dot", function() {
    it("returns true", function() {
      expect(whitespaceMoreCharacter("test .asfd")).toBe(true);
    });
  });

  describe("when has an whitespace with a comma", function() {
    it("returns true", function() {
      expect(whitespaceMoreCharacter("test , something")).toBe(true);
    });
  });

  describe("when has an whitespace with a colon", function() {
    it("returns true", function() {
      expect(whitespaceMoreCharacter("test : another")).toBe(true);
    });
  });

  describe("when has an whitespace with a semicolon", function() {
    it("returns true", function() {
      expect(whitespaceMoreCharacter("test ; heyhey")).toBe(true);
    });
  });

  describe("when hasnt an whitespace before character", function() {
    it("returns false", function() {
      expect(whitespaceMoreCharacter("test. ")).toBe(false);
    });
  });
}); // whitespaceMoreCharacter

describe('sixOrMoreLetters', function() {
  describe('when there are an word with six or more letters', function() {
    it('returns true', function() {
      expect(sixOrMoreLetters("I will said: sixOrMoreLetters")).toBe(true);
    });
  });

  describe('when no one word has more than six letters', function() {
    it('returns false', function() {
      expect(sixOrMoreLetters("My name is Rafael")).toBe(false);
    });
  });
}); // sixOrMoreLetters

describe('withoutE', function() {
  describe('when the word doesnt has the letter E', function() {
    it("returns true", function() {
      expect(withoutE("abc")).toEqual(
        ['a', 'b', 'c']
      );
    });
  });

  describe('when the word has the letter E', function() {
    it("returns false", function() {
      expect(withoutE("abcdefghE")).toEqual(
        ['a', 'b', 'c', 'd', 'f', 'g', 'h']
      );
    });
  });
}); // withoutE