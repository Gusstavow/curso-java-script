// document.addEventListener("click", () => console.log("click"))


class Person {
    constructor(name) {
        this._name = this._capitazile(name)

    }

    set name(string) {
        this._name = this._capitazile(string)
    }

     get name() {
         return this._name
     }

     _capitazile(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`


     }

    walk() {
        return `${this._name} esta andando`
    }
}

class Developer extends Person{
    constructor(name, codeLanguage){
        super(name)
        this._capitazile = codeLanguage
    }

    code(){
        return `${this._name} esta codando em ${this.codeLanguage}`
    }

}

let person = new Person('Pedro')

console.log(person.walk());

let developer = new Developer("Gustavo", "JavaScript");

console.log(developer.code())