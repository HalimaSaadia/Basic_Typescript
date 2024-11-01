{
  type User = {
    name: string;
  };

  interface UserWithRoll extends User {
    roll: number;
  }

  const newUser: UserWithRoll = {
    name: "Halima",
    roll: 10,
  };

//   array interface 
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }

//   function interface
type Add = (num1:number, num2:number ) => number
interface Add1 {
    (num1:number, num2:number) : number
}

const add:Add1 = (num1, num2) => num1 + num2

}
