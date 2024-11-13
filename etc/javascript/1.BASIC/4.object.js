let person = {
    name: 'John',
    age: 25,
    address: 'Seoul \"Gwanak\"',
    greet: function () {
        return 'hello ' + this.name
    }
}

console.log('Name : ' + person.name);
console.log('Age : ' + person.age);
console.log('Addr : ' + person.address);
console.log(person.greet());