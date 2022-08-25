import createName from "./createName";

export type TypeRebot = "Cleaner" | "Waiter" | "Developer";
export interface Robot {
  name: string;
  work: TypeRebot;
  battery: number;
}

export const CreateRobot = (sendRobot: TypeRebot) => {
  const robot: Robot = {
    name: createName(),
    work: sendRobot,
    battery: 100,
  };

  return robot;
};
