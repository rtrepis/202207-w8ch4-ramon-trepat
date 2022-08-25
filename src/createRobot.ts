import createName from "./createName";

export type TypeRebot = "Cleaner" | "Waiter" | "Developer";
export interface Robot {
  name: string;
  type: TypeRebot;
  battery: number;
}

export const CreateRobot = (sendRobot: TypeRebot) => {
  const robot: Robot = {
    name: createName(),
    type: sendRobot,
    battery: 100,
  };

  return robot;
};
