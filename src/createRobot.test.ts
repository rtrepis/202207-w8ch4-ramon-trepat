import { CreateRobot } from "./createRobot";

describe("Give a function createRobot", () => {
  describe("When its called with a typeWork", () => {
    test("Then should return object property work with a typeWork", () => {
      const typeWork = "Cleaner";

      const robot = CreateRobot(typeWork);

      expect(robot.work).toStrictEqual(typeWork);
    });
  });
  test("Then should return object property name with 5 characters", () => {
    const typeWork = "Waiter";
    const characters = 5;

    const robot = CreateRobot(typeWork);

    expect(robot.name).toHaveLength(characters);
  });

  test("Then should return object name battery with 100", () => {
    const typeWork = "Developer";
    const expectBattery = 100;

    const robot = CreateRobot(typeWork);

    expect(robot.battery).toBe(expectBattery);
  });
});
