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
