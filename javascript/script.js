/* EVENTO SUL BUTTON "CALCOLA" */
const btnCalcola = document.querySelector('#btn-calcola');
btnCalcola.addEventListener('click', function() {

    /* PRENDI DATI DAI CAMPI INPUT */
    const kilometri = parseInt(document.querySelector('#kilometri').value);
    console.log(kilometri);
    const eta = parseInt(document.querySelector('#anni').value);
    console.log(eta);

    /* VARIABILI FISSE */
    const prezzo = 0.21;
    const scontoMinorenni = 0.20;
    const scontiOver65 = 0.40;

    /* VARIABILI NON FISSE */
    let costoBiglietto = prezzo * kilometri;

    /* CONDIZIONE */
    if (eta <= 17) {
        costoBiglietto = costoBiglietto - (costoBiglietto * scontoMinorenni);
    } if (eta >= 65) {
        costoBiglietto = costoBiglietto - (costoBiglietto * scontiOver65);
    } 

    /* APPROSSIMAZIONE */
    costoBiglietto = costoBiglietto.toFixed(2);

    /* MOSTRA RISULTATO NELLA LABEL */
    document.querySelector('#costo-biglietto').innerHTML =` ${costoBiglietto}€`;
    console.log(costoBiglietto);

});

/* EVENTO SUL BUTTON "PULISCI" */
const btnPulisci = document.querySelector('#btn-pulisci');
btnPulisci.addEventListener('click', function() {

    /*  PULISCI INPUT */
    document.querySelector('#kilometri').value =' ';
    document.querySelector('#anni').value =' ';
    /*  PULISCI LABEL */
    document.querySelector('#costo-biglietto').innerHTML =' ';

});



    
 
    

    
 
    
    