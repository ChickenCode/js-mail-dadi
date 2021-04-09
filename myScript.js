// creo due variabili che fanno la stessa identica cosa, ovvero creano un numero random (tra 0 e 1) e lo moltiplicano per 6, arrotondandolo per difetto in modo che il numero masssimo sia 6 e il minimo sia 1
let facciaRandomPlayer = Math.ceil(Math.random() * 6);
let facciaRandomAi = Math.ceil(Math.random() * 6);

//stampo i valori così l'utente può leggerli e verificare che il computer non lo stia trollando
console.log("Il tuo punteggio è " + facciaRandomPlayer)
console.log("Il punteggio del computer è " + facciaRandomAi)


//stampo il risultato
if (facciaRandomPlayer < facciaRandomAi) {
    console.log("Hai perso... SCHIAPPA!")
}

else if (facciaRandomPlayer > facciaRandomAi) {
    console.log("Hai vinto... per ora. Sarai capace di rifarlo?")
}

else {
    console.log("Abbiamo un pareggio... su, riprova.")
}