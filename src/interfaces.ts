interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

var customer: IPerson = {
  firstName: "Tom",
  lastName: "Hanks",
  sayHi: (): string => {
    return "Hi there";
  },
};

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var p: IPerson = {
  firstName: "Jim",
  lastName: "Blakes",
  sayHi: (): string => {
    return "Hello!!!";
  },
};

console.log("Employee  Object ");
console.log(p.firstName);
console.log(p.lastName);

interface RunOptions {
  program: string;
  commandline: string[] | string | (() => string);
}

//commandline as string
var options: RunOptions = { program: "test1", commandline: "Hello" };
console.log(options.commandline);

//commandline as a string array
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);

//commandline as a function expression
options = {
  program: "test1",
  commandline: () => {
    return "**Hello World**";
  },
};

var fn: any = options.commandline;
console.log(fn());

// ------------------------------------------------------------------------

interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

var drummer = <Musician>{};

drummer.age = 27;
drummer.instrument = "Drums";

console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);

// ---------------------------------------------------------------------

interface IParent1 {
  v1: number;
}

interface IParent2 {
  v2: number;
}

interface Child extends IParent1, IParent2 {}

var Iobj: Child = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
