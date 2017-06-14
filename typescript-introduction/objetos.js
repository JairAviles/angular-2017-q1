var MyPerson = (function () {
    function MyPerson(_first_name, _last_name) {
        console.log("first_name", _first_name);
        console.log("last_name", _last_name);
        this.first_name = _first_name;
        this.last_name = _last_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = '(⌐■_■)';
        return " Saludos:\n        " + this.first_name + " " + this.last_name + ",\n        te enviamos un emoji de la consola\n    " + emojis;
    };
    return MyPerson;
}());
var personaUno = new MyPerson();
var personaDos = new MyPerson('Jair');
var personaTres = new MyPerson('Jair', 'Aviles');
console.log(personaTres.getSaludo());
