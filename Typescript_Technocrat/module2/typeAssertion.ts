{
  let anything: any;

  anything = "Next Level Web Developemnt";
  (anything as string).length;

  const kgToGm = (value: number | string): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = Number(value) * 1000;
      return `The Coverted Value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(100) as number
  const result2 = kgToGm("100") as string
  
 

}
