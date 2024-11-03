{
  // Task 2: Functions, Optional, and Literal Types

  const student = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ) => {
    const info = {
      name,
      age,
      role,
    };
    console.log(info);
  };

  student("halima", 24, "admin");

  // Task 3: Object Types, Type Alias, & Literal Types
  // Objective: Define a structured Person object using Type Aliases.
  // Instructions:
  // Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

  type Hair = "Black" | "Brown" | "Gray" | "White";
  type Eye = "Brown" | "Black" | "Blue" | "Green" | "Hazel";
  type MaritalStatus = "single" | "married" | "divorced" | "widowed";
  type Skill = {
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
  };

  type FamilyMember = {
    name: string;
    relation: "parent" | "sibling" | "child" | "spouse" | "other";
    age: number;
  };

  type Job = {
    title: string;
    company: string;
    salary: number;
    yearsExperience: number;
  };

  type Person = {
    Name: string;
    Address: string;
    hairColor: Hair;
    eyeColor: Eye;
    income: number;
    expenses: number;
    hobbies: string[];
    family: FamilyMember[];
    job: Job;
    skills: Skill[];
    maritalStatus: MaritalStatus;
    firends: string[];
  };

  // Task 4: Union and Intersection Types
  // Objective: Create union and intersection types using interfaces.

  // Instructions:
  // Define interfaces Book and Magazine.
  // Create:
  // A type that is a union of Book and Magazine.
  // A type that is an intersection of Book and Magazine.
  interface Book {
    name: string;
    price: number;
  }
  interface Magazine {
    release: string;
  }

  type readignMaterial = Book | Magazine;
  type ComprehensivePublication = Book & Magazine;

  const article1: readignMaterial = {
    name: "",
    price: 50,
  };
  const article2: ComprehensivePublication = {
    name: "",
    price: 50,
    release: "11-3-24",
  };

  // Write a function reverseString that:
  // Takes a single string argument.
  // Returns the string in reverse order.

  const reverseString = (input: string) => {
    const result = input.split("").reverse().join("");
    console.log(result);
  };
  reverseString("input");

  // Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
  const sumOfArguments = (...rest: number[]) =>
    rest.reduce((acc, curr) => acc + curr, 0);
  console.log(sumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9));

  // Task 7: Type Assertion and Narrowing
  // Create a function that accepts a parameter of type string | number.
  // The function should:
  // Return the length if the input is a string.
  // Return the square if the input is a number.

  const checkInputType = (input: string | number) => {
    if (typeof input === "string") {
      const result = input.length;
      console.log(result);
      return result;
    }
    if (typeof input === "number") {
      const result = input * input;
      console.log(result);
      return result;
    }
  };
  checkInputType(5);

  // Task 8: Intersection Types
  // Objective: Practice using intersection types.

  // Instructions:
  // Create a type AdminUser that is an intersection of:
  // User with properties name and email
  // Admin with property adminLevel
  // Write a function describeAdmin(user: AdminUser): string that returns a description of the admin user.

  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: number;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string =>
    `${user.name} (Email: ${user.email}) has an admin level of ${user.adminLevel}.`;

  // Task 10: Nullish Coalescing
  // Objective: Handle null and undefined values using nullish coalescing.

  // Instructions:
  // Write a function getDisplayName(name: string | null | undefined): string that returns "Anonymous" if name is null or undefined.

  const getDisplayName = (name: string | null | undefined): string =>
    name ?? "Anonymous";
  console.log(getDisplayName(undefined));

  // Task 11: Unknown Type
  // Objective: Handle different types with the unknown type.

  // Instructions:
  // Write a function processData(data: unknown) that:
  // Checks if data is a string and returns the uppercased version.
  // If data is a number, returns the square of it.

  const processData = (data: unknown) => {
    if (typeof data === "string") {
      return data.toUpperCase();
    }
    if (typeof data === "number") {
      return data * data;
    }
  };
  console.log(processData("sadia"));

  // Task 12: Never Type
  // Objective: Use the never type for functions that don’t return.

  // Instructions:

  // Write a function handleError that:
  // Accepts a message: string.
  // Throws an error with the given message.
  // Use the never return type to indicate that this function never returns.

  function handleError(message: string): never {
    throw new Error(message);
  }
  // handleError("There was an error in server side")

  // Task 13: Generics with Functions and Interfaces
  // Objective: Use generics to handle different types.
  // Instructions:
  // Create a generic function that:
  // Accepts an array of any type.
  // Returns a new array with duplicate values removed.

  const removeDuplicate = <T>(array : T[]) => Array.from(new Set(array));
  console.log(removeDuplicate([1,2,3,3,3,3]))
}
