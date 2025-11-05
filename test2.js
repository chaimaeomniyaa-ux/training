// Sample dummy code
function sayHello() {
    console.log("Hello, World!");
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

class DummyClass {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Welcome, ${this.name}!`;
    }
}

sayHello();
console.log(doubled);
const dummy = new DummyClass("User");
console.log(dummy.greet());