const createName = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const numbers = "1234567890";
  let nameRobot = "";

  const randomIndex = (n: number) => Math.floor(Math.random() * n);

  for (let i = 0; i < 5; i += 1) {
    if (nameRobot.length < 3) {
      nameRobot += letters[randomIndex(letters.length)];
    } else {
      nameRobot += numbers[randomIndex(numbers.length)];
    }
  }
  return nameRobot;
};

export default createName;
