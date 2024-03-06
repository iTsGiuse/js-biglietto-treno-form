/* EVENTO SUL BUTTON "CALCOLA" */
const btnCalcola = document.querySelector('#btn-calcola');
btnCalcola.addEventListener('click', function() {

    /* PRENDI DATI DAI CAMPI INPUT */
    const kilometri = parseInt(document.querySelector('#kilometri').value);
    console.log(kilometri);
    const eta = parseInt(document.querySelector('#anni').value);
    console.log(eta);
    const nome = document.querySelector('#nome');
    console.log(nome);

    /* VARIABILI FISSE */
    const prezzo = 0.21;
    const scontoMinorenni = 0.20;
    const scontiOver65 = 0.40;
    const tipoOfferta = 'Biglietto standard';

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

    /* GENERAZIONE NUMERI RANDOM */
    const carrozza = Math.floor(Math.random() * 15) + 1;
    console.log(carrozza);
    const codiceCp = Math.floor(Math.random() * 15000) + 1000;
    console.log(codiceCp);

    /* MOSTRA RISULTATO NELLA LABEL */
    document.querySelector('#costo-biglietto').innerHTML =` ${costoBiglietto}€`;
    console.log(costoBiglietto);

    document.querySelector('#cognome').innerHTML =` ${nome}`;
    document.querySelector('#tipo-biglietto').innerHTML =` ${tipoOfferta}`;
    document.querySelector('#carrozza').innerHTML =` ${carrozza}`;
    document.querySelector('#codice-cp').innerHTML =` ${codiceCp}`;
});

/* EVENTO SUL BUTTON "PULISCI" */
const btnPulisci = document.querySelector('#btn-pulisci');
btnPulisci.addEventListener('click', function() {

    /*  PULISCI INPUT */
    document.querySelector('#kilometri').value =' ';
    document.querySelector('#anni').value =' ';
    document.querySelector('#nome').value =' ';
    /*  PULISCI LABEL */
    document.querySelector('#costo-biglietto').innerHTML =' ';
    document.querySelector('#cognome').innerHTML =' ';
    document.querySelector('#tipo-biglietto').innerHTML =' ';
    document.querySelector('#carrozza').innerHTML =' ';
    document.querySelector('#codice-cp').innerHTML =' ';
    

});



    
 
    

    
 
    
    