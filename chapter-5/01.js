function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

Person.prototype.speak = function(){
    console.log(`Hi, my name is ${this.name} ${this.lastName}`);
}

const sacha = new Person("Sacha", "Lifszyc", 28);
const alan = new Person("Alan", "Perez", 30);
const martin = new Person("Martin", "Gomez", 24);