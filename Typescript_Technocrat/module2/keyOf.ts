{
  type Vehicle = {
    car: string;
    bike: string;
    plane: string;
  }

  type owner = keyof Vehicle;
  const person : owner = "car";

  type personType = {name:string, age:number}

  const getProperty = <T extends personType, Q extends keyof T>(obj:T, key: Q) => {
  return obj[key]
  }
  const person2 = {
    name:"Halima",
    age: 42
  }
  console.log(getProperty(person2, "age"))

  const updateProperty  =<T extends personType, P extends keyof T>(obj:T, key:P, value :  T[P] ) : T => {
    obj[key] = value
      return obj
  }

  console.log(updateProperty(person2, "age", 24))
}
