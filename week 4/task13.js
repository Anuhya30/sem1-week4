const person = {
    name: 'Anu',
    age: 25,
    city: 'Los Angeles',

    printName: function() {
        console.log(`My name is ${this.name}.`);
    }
};


person.printName();
