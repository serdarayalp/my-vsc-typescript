var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // Konstrukur
    function Person(_name) {
        this.name = _name;
    }
    // Methoden
    Person.prototype.check = function () {
        // Code
    };
    Person.prototype.print = function () {
        // Code
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.status = true;
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.print = function () {
        // Code
        _super.prototype.print.call(this);
    };
    return Student;
}(Person));
var person1 = new Person("Klaus");
var person2 = new Person("Karl");
console.log(person1.getName());
//# sourceMappingURL=class.js.map