{
  class Shape {
    getShape(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getShape(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Triangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      (this.height = height), (this.width = width);
    }
    getShape(): number {
      return this.height * this.width;
    }
  }

  const getArea = (area: Shape) => {
    console.log(area.getShape());
  };
  const instance1 = new Circle(10)
  const instance2 = new Triangle(10, 10)
//   getArea(instance2)
console.log(instance2.getShape())
}
