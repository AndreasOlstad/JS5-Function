/* Oppgave 1

function kalk(a,b,c) {
    let plus = a+b+c;
    let min = a-b-c;
    let div = a/b/c;
    let times = a*b*c;
 
    return (`SUM:${plus}, MIN: ${min}`);
   
}
 
let tall1 = Number(prompt("Skriv tall 1"))
let tall2 = Number(prompt("Skriv tall 2"))
let tall3 = Number(prompt("Skriv tall 3"))
 
console.log(kalk(tall1,tall2,tall3));
*/

/* Oppgave 2
function sammenlignTall() {
  var tall1 = Math.floor(Math.random() * 11);
  var tall2 = Math.floor(Math.random() * 11);

  if (tall1 < tall2) {
    return tall1 + " er mindre enn " + tall2;
  } else if (tall1 > tall2) {
    return tall1 + " er større enn " + tall2;
  } else {
    return tall1 + " er lik " + tall2;
  }
}

console.log(sammenlignTall());
*/

/*Oppgave 3
function Kalkulator() {
  tall1 = parseFloat(prompt("Skriv inn et tall"));
  tegn = prompt("Skriv inn et tegn (+, -, *, /)");
  tall2 = parseFloat(prompt("Skriv inn et til tall"));

  if (tegn == "+") {
    resultat = tall1 + tall2;
  } else if (tegn == "-") {
    resultat = tall1 - tall2;
  } else if (tegn == "*") {
    resultat = tall1 * tall2;
  } else if (tegn == "/") {
    resultat = tall1 / tall2;
  }

  alert(`Svaret er ${resultat}`);
}

Kalkulator();
*/

/*Oppgave 4
function TilfeldigTall() {
  tall1 = parseFloat(prompt("Skriv inn et tall")); 
  tall2 = parseFloat(prompt("Skriv inn et annet tall")); 
  randomTall = Math.floor(Math.random() * (tall2 - tall1 - 1) + tall1 + 1);

  alert(`Det valgte tallet var ${randomTall}`);
}

TilfeldigTall();
*/

/*Oppgave 5 - utfordring 
function Sortering() {
  var tallListe = [];

  for (var i = 1; i <= 5; i++) {
    var tall = parseFloat(prompt("Skriv inn tall " + i));
    tallListe.push(tall);
  }

  tallListe.sort(function (a, b) {
    return a - b;
  });

  alert(
    "Sorterte tall fra minste til største: " + tallListe.join(", ")
  );
}

Sortering();
*/

/*Oppgave 6 - utfordring 
function RoykenPrint() {
    let resultat = '';
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            resultat += '<div class="rad">';
        }
        resultat += '<div class="boks">Røyken VGS</div>';
        if ((i + 1) % 3 === 0) {
            resultat += '</div>';
        }
    }
    document.body.innerHTML = resultat;
}
RoykenPrint();
*/

/*Oppgave 7 
function finnStørsteTall() {
  var tall1 = parseFloat(prompt("Skriv inn det første tallet:"));
  var tall2 = parseFloat(prompt("Skriv inn det andre tallet:"));
  var tall3 = parseFloat(prompt("Skriv inn det tredje tallet:"));

  if (isNaN(tall1) || isNaN(tall2) || isNaN(tall3)) {
    alert("Vennligst skriv inn gyldige tall.");
    return;
  }

  var størsteTall = Math.max(tall1, tall2, tall3);

  alert("Det største tallet er " + størsteTall);
}

finnStørsteTall();
*/

/*Oppgave 8 
function utførProsessen() {
  var startTall = parseInt(prompt("Skriv inn et heltall:"));

  if (isNaN(startTall) || !Number.isInteger(startTall)) {
    alert("Vennligst skriv inn et gyldig heltall.");
    return;
  }

  alert(startTall);

  while (startTall !== 1) {
    if (startTall % 2 === 0) {
      startTall = startTall / 2;
    } else {
      startTall = 3 * startTall + 1;
    }

    alert(startTall);
  }
}

utførProsessen();
*/