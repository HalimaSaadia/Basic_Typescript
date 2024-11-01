{
  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [1, 2, 3, 4];
  const mentors: GenericArray<string> = ["1", "2", "3", "4"];

  const users: GenericArray<{ name: string; roll: number }> = [
    { name: "Halima", roll: 5 },
  ];


//   tuple
type GenericTouple<X, Y> = [X, Y]
const couple  : GenericTouple<string, string> = ["x", "y"]
}
