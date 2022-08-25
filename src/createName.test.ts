import createName from "./createName";

describe("Given a function createName", () => {
  describe("When called", () => {
    test("Then should return name length = 5 ", () => {
      const expecLength = 5;

      const name = createName();

      expect(name.length).toBe(expecLength);
    });
    test("Then should return name with 3 letters", () => {
      const letters = [..."ABCDEFGHIJKLMNOPQRSTUVXYZ"];
      const nLettes = 3;

      let expectNLetters = 0;
      const name = createName();
      letters.forEach((element) => {
        if (name.includes(element)) {
          expectNLetters += 1;
        }
      });

      expect(expectNLetters).toStrictEqual(nLettes);
    });
    test("Then should return name with 2 numbers", () => {
      const numbers = [..."1234567890"];
      const nNumbers = 2;

      let expectNNumbers = 0;
      const name = createName();
      numbers.forEach((element) => {
        if (name.includes(element)) {
          expectNNumbers += 1;
        }
      });

      expect(expectNNumbers).toStrictEqual(nNumbers);
    });
  });
});
