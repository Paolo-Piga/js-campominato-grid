// costante container
let container = document.getElementById(`container`);

// creo un bottone per iniziare il gioco
let pop = document.getElementById(`start`);

// faccio una funzione con l'evento
pop.addEventListener(`click`, function() {
    // faccio creare la griglia dopo il click
    container.innerHTML = ``;
    
    
    // creo un ciclo per generare le 100 celle
    for(i = 1; i <= 100; i++){
    const generatore = createElement("div");
    generatore.innerHTML += i;

    // aggiungo la classe al div
    generatore.classList.add(`quadrato`);

    // uso append sul container
    container.append(generatore);

    // faccio una funzione col click così da colorare il quadrato quando viene cliccato
    generatore.addEventListener(`click`, function(){
        generatore.classList.toggle(`cliccato`);
        // stampo che la cella è stata cliccata
        console.log(`Cliccata`, this.innerHTML);
    });
    }
}); 


// funzione per aggiungere i quadrati
function aggiunta(lord, addendo) {
    let singolo = document.createElement(lord);
    singolo.innerHTML += i;
    lord.classList.add(addendo);
    return singolo;
}

// // il bottone dovrà generare una griglia e le 100 caselle, 10 per riga e 10 per colonna
// const griglia = createElementWithClass("div");

// for (let i = 1; i <= 100; i++) {
//     const quadrato = createElementWithClass("div");
// }

// // quando la casella verrà cliccata essa cambierà di colore
// quadrato = addEventListener("click"); function(
    
// );

// // dovrò aggiungere una funzione o un if per far cambiare colore alla casella

