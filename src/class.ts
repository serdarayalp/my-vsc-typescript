class Person {
  static status: boolean = true;

  // Felder
  protected name: string;
  protected lastname: string;

  // Konstrukur
  constructor(_name: string) {
    this.name = _name;
  }

  // Methoden
  public check() {
    // Code
  }
  public print() {
    // Code
  }
  public getName() {
    return this.name;
  }
}

class Student extends Person {
  // Felder
  private nr: Number;
  public print() {
    // Code
    super.print();
  }
}

let person1: Person = new Person("Klaus");
let person2: Person = new Person("Karl");

console.log(person1.getName())

// ----------------------------

class Car {
  //field
  engine: string;

  //constructor
  constructor(engine: string) {
    this.engine = engine;
  }

  //function
  disp(): void {
    console.log("Engine is: " + this.engine);
  }
}

var my_car = new Car("BMW");

//access the field
console.log("Reading attribute value Engine as :  " + my_car.engine);

//access the function
my_car.disp();

// -----------------------------

class Shape {
  area: number;

  constructor(a: number) {
    this.area = a;
  }
}

class Circle extends Shape {
  disp(): void {
    console.log("Area of the circle:  " + this.area);
  }
}

var c = new Circle(223);
c.disp();

// ----------------------------------------

class StaticMem {
  static num: number;

  static disp(): void {
    console.log("The value of num is: " + StaticMem.num);
  }
}

StaticMem.num = 12; // initialize the static variable
StaticMem.disp(); // invoke the static method

// ----------------------------------------

interface ILoan {
  interest: number;
}

class AgriLoan implements ILoan {

  interest: number;
  rebate: number;

  constructor(interest: number, rebate: number) {
    this.interest = interest;
    this.rebate = rebate;
  }
}

var o = new AgriLoan(10, 1);
console.log("Interest is : " + o.interest + " Rebate is : " + o.rebate);
