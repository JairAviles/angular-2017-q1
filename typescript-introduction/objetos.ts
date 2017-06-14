class MyPerson {
  first_name :string;
  last_name :string;
  constructor(_first_name?:string, _last_name?:string) {
    console.log("first_name", _first_name);
    console.log("last_name", _last_name);
    this.first_name = _first_name;
    this.last_name = _last_name;
  }

  getSaludo():string {
    let emojis = '(⌐■_■)';
    return ` Saludos:
        ${this.first_name} ${this.last_name},
        te enviamos un emoji de la consola
    ` + emojis;
  }

}

let personOne = new MyPerson();
let personaTwo = new MyPerson('Jair');
let personaThree = new MyPerson('Jair', 'Aviles');

console.log(personaThree.getSaludo());
console.log(personaThree);
