{
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const result = (value * 1000) / 3600;
      console.log(`Result is ${result}`);
    } else if (typeof value === "string") {
      const [digit, rest] = value.split(" ");
      const result = (Number(digit) * 1000) / 3600;
      console.log(`Result is ${result}`);
    } else {
      console.log("Invalid Input");
    }
  };

  getSpeedInMeterPerSecond(null);
}
