import "./loadEnvironment";
import Debug from "debug";
import { CreateRobot } from "./createRobot";
import downBatery from "./downBatery";

const debug = Debug("Robot");

const Robot = CreateRobot("Cleaner");

const interval = setInterval(() => {
  downBatery(Robot);
  debug(`Batery:" ${Robot.battery}`);
  if (Robot.battery === 10) {
    debug("Low Battery");
  }
  if (Robot.battery === 0) {
    debug("Zero Battery");
    clearInterval(interval);
  }
}, 20);

debug(Robot);
