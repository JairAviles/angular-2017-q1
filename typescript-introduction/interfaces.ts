interface MyPersona {
  first_name:string;
  last_name:string;
  twitter_account?:string;
}

let personaUno:MyPersona = {
  first_name: "Jair",
  last_name: "Aviles",
  twitter_account: "@yajairo87"
}

let personaDos:MyPersona = {
  first_name: "Miguel",
  last_name: "Luis"
}
console.log(personaUno);
console.log(personaDos);
