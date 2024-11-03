{
  class Parent {
    constructor(
      public name: string,
      public age: string,
      public address: string
    ) {}
    getSleep() {
      console.log(`${this.name} will sleep for 8 hours`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: string, address: string) {
      super(name, age, address);
    }
  }

  const student = new Student("Halima", "24", "adabor3");
  student.getSleep();

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: string,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass() {
      console.log(`${this.name} will take 5 class`);
    }
  }

  const teacher = new Teacher("Miss", "40", "Janina", "Proffessor");
  teacher.takeClass();
}
