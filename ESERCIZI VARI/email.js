let email = ["a@gmail.com", "b@gmail.com", "c@gmail.com"];

let userMail = prompt("Inserisci la tua mail qui");
let verification = 0

for (i = 0; i < email.length; i++) {
    if (userMail === email[i]) {
        verification += 1
    }
}

if (verification == 1) {
    console.log("Email riconosciuta! Benvenuto")
}

else {
    console.log("Email non riconosciuta! Ricarica e riprova")
}