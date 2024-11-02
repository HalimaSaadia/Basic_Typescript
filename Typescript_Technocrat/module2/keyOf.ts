{
  type Vehicle = {
    bike: string;
    car: string;
    airplan: string;
  };

  type owner1 = "bike" | "card" | "airplan"
  type owner2 = keyof Vehicle

  const person1 : owner2 = "bike"

//   constrain with function

const getPropertyValue =<T, X extends keyof T> (obj:T, key:X) =>{
    console.log(obj[key])
    return obj[key]
}

const user = {
    id: 111, 
    name: "Halima",
    email: "halima@gmail.com"
}
const result1 = getPropertyValue(user, "id")
}
