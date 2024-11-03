{
  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString<AreaNumber> = {
    [key in keyof AreaNumber]: string;
  };

  type AreaGeneric<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaGeneric<{ height: string; width: string }> = {
    height: "100",
    width: "100",
  };
  const area2: AreaGeneric<{ height: string; width: string; depth:boolean }> = {
    height: "100",
    width: "100",
    depth:true
  };
}
