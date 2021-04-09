let listedMail = []

let userEmail = prompt("Inserisci la tua eMail per eseguire il login")

if (listedMail.includes(userEmail)) {
    console.log("Benvenuto a bordo, caro")
}

else {
    alert("La tua mail non è registrata")
    var insertMail = prompt("Se desideri registrarla, inserisci la tua mail qua sotto. Altrimenti semplicemente digita: no")

        
        if (insertMail.toLocaleLowerCase() === "no") {
            alert("OK, ALLORA SMAMMA")
        }

        else if (insertMail.includes("@") && insertMail.includes(".")) {
            listedMail.push(insertMail)
            alert("Complimenti, la tua mail è stata registrata")
            
            let userEmail = prompt("Inserisci la tua eMail per eseguire il login")
            console.log(userEmail)

            if (!(listedMail.includes(userEmail))) {
                alert("CI HAI PROVATO... SMAMMA MAMMALUCCO")
            }
            
            else {
                alert("Benvenuto a bordo, caro")
            }
        }

        else {
            alert("Email non valida. Ricarica e riprova.")
        }
}