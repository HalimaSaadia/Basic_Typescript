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

  const result1 = kgToGm(100) as number;
  const result2 = kgToGm("100") as string;

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const isTodo = (todo: any): todo is Todo =>
    typeof todo.userId === "number" &&
    typeof todo.id === "number" &&
    typeof todo.title === "string" &&
    typeof todo.completed === "boolean";

  const getTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await res.json();
    if (isTodo(todo)) {
      console.log(`${todo.title}`);
    } else {
      console.log("Invalid Todo Data");
    }
  };

  getTodo();

  const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
    return keys.every((key) => key in (obj as object));
  };
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
