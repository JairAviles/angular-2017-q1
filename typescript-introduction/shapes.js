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
