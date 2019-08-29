var Example = /** @class */ (function () {
    function Example(name) {
        this.name = name;
    }
    Example.prototype.eat = function () {
        alert("My name is: " + this.name);
    };
    return Example;
}());
var exam = new Example("Pavel");
exam.eat();
