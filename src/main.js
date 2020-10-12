var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World from Class!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
