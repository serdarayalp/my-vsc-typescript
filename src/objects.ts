/* 
An object is an instance which contains set of key value pairs. The values can be scalar values or 
functions or even array of other objects. An object can contain scalar values, 
functions and structures like arrays and tuples.

var object_name = {
  key1: "value1",
  key2: "value2",
  key3: function () {
    // ...
  },
  key4: ["content1", "content2"],
};

*/


/*
var person = {
  firstname: "Tom",
  lastname: "Hanks",
};

var invokeperson = function (p: { firstname: string; lastname: string }) {
  console.log("first name:" + p.firstname);
  console.log("last name:" + p.lastname);
};

invokeperson(person);
*/

/*
var invokeperson = function (obj: { firstname: string; lastname: string }) {
  console.log("first name :" + obj.firstname);
  console.log("last name :" + obj.lastname);
};
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });
*/


var person = {
  firstname: "Tom",
  lastname: "Hanks",
  sayHello: function () {}
};

//access the object values
console.log(person.firstname);
console.log(person.lastname);

person.sayHello = function () {
  console.log("hello " + person.firstname);
};
person.sayHello();