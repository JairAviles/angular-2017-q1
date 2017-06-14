var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = (function () {
    function Greeter(mensaje) {
        this.greeting = mensaje;
    }
    Greeter.prototype.greet = function () {
        return 'Hey, ' + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("soy el mensaje");
console.log(gree.greet());
var _this = this;
console.log("Hello world");
var full_name = "Jair Avilés";
var age = 30;
var developer = true;
var skill = ['Javascript', 'Typescript', 'Angular'];
var numberArray = [1987, 2017, 2008];
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developr"] = 3] = "Developr";
})(Role || (Role = {}));
;
var role = Role.Employee;
console.log("roles", role);
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return pretext + " " + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello("Aline Castro"));
inConsole(full_name);
inConsole('eu sou um string');
var data = ['AngularJs', 'Angular', 'Redux', 'ReactJs', 'VueJs'];
data.forEach(function (frameworksLibs) {
    _this.inConsole(frameworksLibs);
});
var personaUno = {
    first_name: "Jair",
    last_name: "Aviles",
    twitter_account: "@yajairo87"
};
var personaDos = {
    first_name: "Miguel",
    last_name: "Luis"
};
console.log(personaUno);
console.log(personaDos);
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
var personOne = new MyPerson();
var personaTwo = new MyPerson('Jair');
var personaThree = new MyPerson('Jair', 'Aviles');
console.log(personaThree.getSaludo());
console.log(personaThree);
var Person = (function () {
    function Person() {
        this.first_name = "Ja";
        this.last_name = "Av";
        this.twitter_user = "@yajairo87";
    }
    Person.prototype.setLastName = function (last_name) {
        this.last_name = last_name;
    };
    return Person;
}());
var myPerson = new Person();
myPerson.setLastName("Aviles");
myPerson.first_name = "Jair";
console.log(myPerson);
//# sourceMappingURL=tsc.js.map