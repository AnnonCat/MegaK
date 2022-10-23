function Person(name, surname){
    this.name = name;
    this.surname = surname;
    this.sayHello = function () {
        console.log("Hello from " + this.name + "" + this.surname);
    };
}

const ourClass = [];
for (let i = 0; i <= 10; i++){
    ourClass.push(new Person(
        prompt("Podaj swoje imie: "),
        prompt("Podaj swoje nazwisko: ")
    ));
}

console.log(ourClass);