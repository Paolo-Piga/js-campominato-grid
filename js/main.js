// creo un bottone per iniziare il gioco
const inizio = document.querySelector(".inizio");
inizio.addEventlistener("click"); 

// il bottone dovrà generare una griglia e le 100 caselle, 10 per riga e 10 per colonna
const griglia = createElementWithClass("div");

for (let i = 1; i <= 100; i++) {
    const quadrato = createElementWithClass("div");
}

// quando la casella verrà cliccata essa cambierà di colore
quadrato = addEventListener("click");

