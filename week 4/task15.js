// Base class
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        return `${this.name} makes a sound.`;
    }
}


class Dog extends Animal {
    constructor(name, breed) {

        super(name, 'Dog');
        this.breed = breed;
    }

    bark() {
        return `${this.name} barks! Woof!`;
    }
}
const myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myDog.speak());
console.log(myDog.bark());
