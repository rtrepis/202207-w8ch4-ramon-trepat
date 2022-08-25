import createName from "./createName";

export type TypeRobot = "Cleaner" | "Waiter" | "Developer";
export interface Robot {
  name: string;
  work: TypeRobot;
  battery: number;
}

export const CreateRobot = (sendRobot: TypeRobot) => {
  const robot: Robot = {
    name: createName(),
    work: sendRobot,
    battery: 100,
  };

  return robot;
};
