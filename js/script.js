// Dichiarazioni variabili form e bottoni
var nome = document.getElementById('form-nome');
var km = document.getElementById('form-km');
var eta = document.getElementById('form-eta');
var genera = document.getElementById('genera');
var reset = document.getElementById('reset');
var biglietto = document.getElementById('biglietto');

// Impostazioni bottone genera
 genera.addEventListener('click',
 function() {

  // Dichiarazione valore variabili
  var etaValue = document.getElementById('form-eta').value;
  var kmValue = document.getElementById('form-km').value;
  var prezzo = kmValue * 0.21;
  var sconto;

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
  document.getElementById('bigl-nome').innerHTML = nome.value;
  document.getElementById('bigl-offerta').innerHTML = sconto;
  document.getElementById('bigl-carrozza').innerHTML = Math.floor((Math.random() * 10)+1);
  document.getElementById('bigl-codice').innerHTML = Math.floor(Math.random() * 10000);
  document.getElementById('bigl-costo').innerHTML = prezzo.toFixed(2);
 }
);

// Impostazioni bottone reset
reset.addEventListener('click',
function() {
  nome.value = '';
  km.value = '';
  eta.value = 'maggiorenne'
  document.getElementById('bigl-nome').innerHTML = '';
  document.getElementById('bigl-offerta').innerHTML = '';
  document.getElementById('bigl-carrozza').innerHTML = '';
  document.getElementById('bigl-codice').innerHTML = '';
  document.getElementById('bigl-costo').innerHTML = '';
}
);
