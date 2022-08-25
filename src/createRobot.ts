interface Robot {
  name: string;
  type: "Cleaner" | "Waiter" | "Developer";
  battery: number;
}

const createRobot = () => {
  const robot: Robot = {
    name: "tre234",
    type: "Cleaner",
    battery: 100,
  };

  return robot;
};

export default createRobot;
