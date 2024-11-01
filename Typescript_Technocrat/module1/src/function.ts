function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 5);

const poorUser = {
  name: "Halima",
  balance: 0,
  addBalance(balance: number): number {
    return  this.balance + balance;
  },
};

const array : number[] = [1,2,3]
const newArray :number [] = array.map((item:number) : number => item * item)
