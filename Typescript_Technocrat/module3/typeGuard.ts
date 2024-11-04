{

// Type Guard
  type Alphaneumeric = string | number;
  const add = (num1: Alphaneumeric, num2: Alphaneumeric): Alphaneumeric => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };

  const result1 = add(5, "5");
  console.log(result1);

  type User = {
    name: string;
  };
  type Admin = {
    name: string;
    role: string;
  };

//   In Guard
  const getUser = (user: User | Admin) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} And My role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}.`);
    }
  };
  
  const normalUser = {
    name: "Halima Tus Sadia"
  }
  const adminUser = {
    name: "Halima Tus Sadia",
    role : "Admin"
  }

  getUser(adminUser)

}
