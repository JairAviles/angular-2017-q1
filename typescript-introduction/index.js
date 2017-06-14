var _this = this;
console.log("Hello world");
//primitas
var full_name = "Jair Avilés";
var age = 30;
var developer = true;
//arrays
var skill = ['Javascript', 'Typescript', 'Angular'];
var numberArray = [1987, 2017, 2008];
//enums
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
