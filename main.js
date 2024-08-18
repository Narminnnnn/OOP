// Object Oriented Programming

// task 1 
// Person classi yaradib ona name age ve surname verin 

class Person {
    constructor(name, age, surname) {
        this.name = name,
            this.age = age,
            this.surname = surname
    }

// doğum ilini hesablayan class icinde bir function yazin
// Meselen age 20 verdiyimizde function 2004 nəticəsini versin
calculateBirth (){
const currentYear = new Date().getFullYear();
return currentYear - this.age
}
}

const person = new Person ("Narmin", 31, "Sharifova")

const birthYear = person.calculateBirth()


console.log(`${person.name} ${person.surname} dogum ili: ${birthYear} `);

