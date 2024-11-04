{
  class Animal {
    constructor(public name: string, public species: string) {}
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I make sound Gew Gew");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMew() {
      console.log("I make sound Mew Mew");
    }
  }

  const dog = new Dog("THe Germen", "DOg");
  const cat = new Cat("The parsian", "cat");

  const isCat = (animal:Animal) : animal is Cat => animal instanceof Cat
  const isDog = (animal:Animal) : animal is Dog => animal instanceof Dog

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(cat)
}
