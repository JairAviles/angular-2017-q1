class Person {
  first_name:string;
  last_name:string;
  twitter_user:string;

  constructor() {
      this.first_name = "Ja";
      this.last_name = "Av";
      this.twitter_user = "@yajairo87";
  }

  setLastName(last_name:string) {
    this.last_name = last_name;
  }


}

var myPerson = new Person();
myPerson.setLastName("Aviles");
myPerson.first_name = "Jair";
console.log(myPerson);
