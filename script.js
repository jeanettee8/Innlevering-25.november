let userName = "John";
console.log(userName);
let userAge = 20;
console.log(userAge);
let userCity = "Bergen";
console.log(userCity);

if (userAge > 18) {
  console.log("Du er over 18, velkommen inn");
} else if (userAge <= 18 && userCity === "Oslo") {
  console.log("Du er ikke gammel nok, og du er fra feil by");
} else if (userName === "John" && userCity === "Bergen") {
  console.log("Velkommen inn, John fra Bergen!");
} else {
  console.log("Error");
}
