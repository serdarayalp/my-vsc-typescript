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