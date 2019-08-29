class Example {
    constructor(name: string) {
        this.name = name
    }
    name: string
    eat() {
        alert(`My name is: ${this.name}`)
    }
}
let exam = new Example("Pavel");
exam.eat();