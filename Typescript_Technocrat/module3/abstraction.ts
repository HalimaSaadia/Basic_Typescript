{
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
  }

  class Car implements Vehicle {
    startEngine(): void {
      console.log("I am starting");
    }

    stopEngine(): void {
      console.log("I have stopped");
    }
  }

  const carInterface = new Car();

  abstract class NormalVehicle {
    abstract startEngine(): void;
    abstract stopEngine(): void;
  }

  class Car2 extends NormalVehicle {
    startEngine() {
      console.log("Toyota starting car");
    }
    stopEngine() {
      console.log("Toyota has stopped");
    }
  }

  const toyota = new Car2()
  toyota.stopEngine()
}
