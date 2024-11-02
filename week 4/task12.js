const person = {
    name: 'Anu',
    age: 20,
    city: 'New York',
    
    introduce: function() {
        console.log(`Hello Everyone, my name is ${this.name}. I am ${this.age} years old and I live in ${this.city}.`);
    }
};

person.introduce();
