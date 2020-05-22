// Dichiarazioni variabili form e bottoni
var nome = document.getElementById('form-nome');
var km = document.getElementById('form-km');
var eta = document.getElementById('form-eta');
var genera = document.getElementById('genera');
var reset = document.getElementById('reset');
var biglietto = document.getElementById('biglietto');
var errore = document.getElementById('errore');
var errorekm = document.getElementById('errorekm');

// Impostazioni bottone genera
genera.addEventListener('click',
function() {

  // Dichiarazione valore variabili
  var etaValue = document.getElementById('form-eta').value;
  var kmValue = document.getElementById('form-km').value;
  kmValue = parseInt(kmValue);
  var prezzo = kmValue * 0.21;
  var sconto;

  // Variabil biglietto
  var prezzoBigl = document.getElementById('bigl-costo');
  var nomeBigl = document.getElementById('bigl-nome');
  var offertaBigl = document.getElementById('bigl-offerta')
  var carrozzaBigl = document.getElementById('bigl-carrozza');
  var codiceBigl = document.getElementById('bigl-codice');

  // Calcolo sconto
  if ( (etaValue != 'minorenne') && (etaValue != 'over')) {
   sconto = 'Prezzo standard'
  } else if ( etaValue == 'minorenne'){
   sconto = 'Sconto 20%';
   prezzo = prezzo - (prezzo * 20 / 100);
  } else {
   sconto = 'Sconto 40%';
   prezzo = prezzo - (prezzo * 40 / 100);
  }

  // Stampa informazioni su biglietto
  biglietto.className = biglietto.classList + ' visible';

  // Validazione nome
  if ( isNaN(nome.value) ) {
    nomeBigl.innerHTML = nome.value;
    errore.className = ' hidden';
  } else {
    nomeBigl.innerHTML = 'Errore';
    errore.className = ' visible';
  }

  // Validazione prezzo
  if ( kmValue < 1 ) {
    prezzoBigl.innerHTML = 'Errore';
    errorekm.className = ' visible';
  } else if (kmValue) {
    prezzoBigl.innerHTML = prezzo.toFixed(2) + ' €';
    prezzoBigl.className = prezzoBigl.classList + ' green';
    errorekm.className = ' hidden';
  } else {
    prezzoBigl.innerHTML = 'Errore';
    errorekm.className = ' visible';
  }

  // Se esiste un errore mandare messaggio a tutti
  if (( !(isNaN(nome.value)) ) || ( isNaN(prezzo) )) {
    offertaBigl.innerHTML = 'Errore';
    carrozzaBigl.innerHTML = 'Errore';
    codiceBigl.innerHTML = 'Errore';
    prezzoBigl.innerHTML = 'Errore';
    nomeBigl.innerHTML = 'Errore';
  } else {
    offertaBigl.innerHTML = sconto;
    carrozzaBigl.innerHTML = Math.floor((Math.random() * 10)+1);
    codiceBigl.innerHTML = Math.floor(Math.random() * 10000);
  }

 }
);

// Impostazioni bottone reset
reset.addEventListener('click',
function() {
  nome.value = '';
  km.value = '';
  prezzoBigl.innerHTML = '';
  nomeBigl.innerHTML = '';
  offertaBigl.innerHTML = '';
  carrozzaBigl.innerHTML = '';
  codiceBigl.innerHTML = '';
  eta.value = 'maggiorenne';
  errore.className = 'hidden';
  errorekm.className = 'hidden';
}
);
