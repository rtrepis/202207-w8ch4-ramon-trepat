import { Robot } from "./createRobot";

const downBatery = (robot: Robot) => {
  // eslint-disable-next-line no-param-reassign
  robot.battery -= 1;
};

export default downBatery;
