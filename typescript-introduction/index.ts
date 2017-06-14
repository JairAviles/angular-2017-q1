console.log("Hello world");

//primitas
var full_name:string = "Jair Avilés";
var age:number = 30;
var developer:boolean = true;

//arrays
var skill:Array<string>= ['Javascript', 'Typescript', 'Angular'];
var numberArray:number[] = [1987,2017,2008];

//enums
enum Role { Employee, Manager, Admin, Developr};
var role:Role = Role.Employee;

console.log("roles", role);

function setName(name:string):void {
  this.full_name = name;
}

function getHello(pretext:string):string {
  return pretext + " " + this.full_name;
}

function inConsole(nameFunction:any):void {
  console.log(nameFunction);
}

inConsole(getHello("Aline Castro"));
inConsole(full_name);
inConsole('eu sou um string');

var data:string[] = ['AngularJs', 'Angular', 'Redux', 'ReactJs', 'VueJs'];
data.forEach(
  (frameworksLibs) => {
    this.inConsole(frameworksLibs);
  }
)
