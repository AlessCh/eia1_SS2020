"use strict";
//inspiriert von:
//-> https://github.com/beaucarnes/simon-game/blob/master/js/index.js//
//-> https://www.youtube.com/watch?time_continue=1&v=n_ec3eowFLQ&feature=emb_logo//
// Aufgabe bearbeitet mit: Lea Kunert & Kathrin Andreev //
//Start des Codes//
//step 1: Deklaration der Variablen & Zuweisung//
//-> arrays//
let computerReihenfolge = []; // Array, in welches die Reihenfolge der aufleuchtenden Buttons des Computers gespeichert werden 
let spielerReihenfolge = []; //Array, in welches die gespielte Reihenfolge vom Spieler gespeichert wird
let sounds = ["sound_boing.mp3", "sound_laugh.mp3", "sound_squeaking.mp3", "sound_whistle.mp3", "sound_yeah.mp3"]; //Array, in dem alle Sounds abgespeichert sind//
//->numbers//
let buttonLeuchten; // Anzahl aufleuchtender buttons wird hier gespeichert
let anReihe; // Angabe der Spielrunde
let intervalId;
//->booleans//
let keineFehler; // true/false ob Nutzer Fehler macht oder keine
let computeranReihe; // true/false ob Computer an der Reihe ist
let ton = true; // soll button ton abspielen oder nicht
let on = false; // wird das Spiel gespielt? wenn true = spieler soll button klicken, wenn false = nicht klicken
let gewonnen; // true/false Spiel gewonnen oder nicht
//-> booleans für den Schwierigkeitsgrad//
//Spieler wählt einer der 4 bei Spielstart aus//
//true/false Spieler hat ___Grad ausgewählt//
let leichtchosen;
let mittelchosen;
let schwerchosen;
let sehrschwerchosen;
//step 2: Buttons selektiert//
//-> Schwierigkeitsgrad
const modeleicht = document.querySelector("#gradleicht");
const modemittel = document.querySelector("#gradmittel");
const modeschwer = document.querySelector("#gradschwer");
const modesehrschwer = document.querySelector("#gradsehrschwer");
//-> Oben/Unten/Innen//
const obenLinks = document.querySelector("#obenlinks");
const obenRechts = document.querySelector("#obenrechts");
const untenLinks = document.querySelector("#untenlinks");
const untenRechts = document.querySelector("#untenrechts");
const kreisInnen = document.querySelector("#kreisinnen");
//-> Counter//
const anreiheCounter = document.querySelector("#anreihe");
const befehle = document.querySelector("#befehl");
//step 3: Funktionen für die Schwierigkeitsgrade erstellt//
var i;
//-> leicht//
modeleicht.addEventListener("click", function () {
    console.log("Button Easy Mode geklickt"); //Konsolenausgabe
    on = true; // spiel gestartet, es ist wahr = on
    leichtchosen = true; //true das Schwierigkeitsgrad leicht
    mittelchosen = false; //alle anderen die nicht gewählt wurden = false
    schwerchosen = false; // -- //
    sehrschwerchosen = false; // -- //
    playleicht();
});
function playleicht() {
    gewonnen = false; // Variablen zurückgesetzt
    computerReihenfolge = []; // Array leer, in dem die Reihenfolge gespeichert wird
    spielerReihenfolge = [];
    buttonLeuchten = 0; // Buttons aufgeleuchtet 0x
    intervalId = 0;
    anReihe = 1; //die erste Runde hat angefangen
    anreiheCounter.innerHTML = "1"; // Counter fängt an zu zählen, es ist die erste Runde
    keineFehler = true; //Abfrage ob Spieler Fehler gemacht hat oder nicht 
    //FORSCHLEIFE ZUM ZÄHLEN///
    for (i = 0; i < 5; i++) { //Zählschleife für 5 Tonabfolgen im Leicht Mode
        computerReihenfolge.push(Math.floor(Math.random() * 5) + 1); //random number wird erstellt (1-5) und pusht dieses in das vorgesehene Array
    }
    console.log(computerReihenfolge); //Konsolenausgabe
    computeranReihe = true; //das Spiel ist dran, spielt dann den Ton ab
    intervalId = setInterval(anreiheSpiel, 800); //Spiel spielt Ton alle 800 millisekunden
}
//-> mittel//
modemittel.addEventListener("click", function () {
    console.log("Button Mittel Mode geklickt"); //Konsolenausgabe
    on = true; // spiel gestartet, es ist wahr = on
    mittelchosen = true; //true das Schwierigkeitsgrad Mittel
    leichtchosen = false; //alle anderen die nicht gewählt wurden = false
    schwerchosen = false; // -- //
    sehrschwerchosen = false; // -- //
    playmittel();
});
function playmittel() {
    gewonnen = false; // Variablen zurückgesetzt
    computerReihenfolge = []; // Array leer, in dem die Reihenfolge gespeichert wird
    spielerReihenfolge = [];
    buttonLeuchten = 0; // Buttons aufgeleuchtet 0x
    intervalId = 0;
    anReihe = 1; //die erste Runde hat angefangen
    anreiheCounter.innerHTML = "1"; // Counter fängt an zu zählen, es ist die erste Runde
    keineFehler = true; //Abfrage ob Spieler Fehler gemacht hat oder nicht 
    //FORSCHLEIFE ZUM ZÄHLEN///
    for (i = 0; i < 15; i++) { //Zählschleife für 15 Tonabfolgen im Mittel Mode
        computerReihenfolge.push(Math.floor(Math.random() * 5) + 1); //random number wird erstellt (1-5) und pusht dieses in das vorgesehene Array
    }
    console.log(computerReihenfolge); // Konsolenausgabe
    computeranReihe = true; //das Spiel ist dran, spielt dann den Ton ab
    intervalId = setInterval(anreiheSpiel, 800); //Spiel spielt Ton alle 800 millisekunden
}
//-> schwer//
modeschwer.addEventListener("click", function () {
    console.log("Button Schwer Mode geklickt"); //Konsolenausgabe
    on = true; //spiel gestartet, es ist wahr = on
    schwerchosen = true; //true das Schwierigkeitsgrad Schwer
    leichtchosen = false; //alle anderen die nicht gewählt wurden = false
    mittelchosen = false;
    sehrschwerchosen = false;
    playschwer();
});
function playschwer() {
    gewonnen = false; // Variablen zurückgesetzt
    computerReihenfolge = []; // Array leer, in dem die Reihenfolge gespeichert wird
    spielerReihenfolge = [];
    buttonLeuchten = 0; // Buttons aufgeleuchtet 0x
    intervalId = 0;
    anReihe = 1; //die erste Runde hat angefangen
    anreiheCounter.innerHTML = "1"; // Counter fängt an zu zählen, es ist die erste Runde
    keineFehler = true; //Abfrage ob Spieler Fehler gemacht hat oder nicht 
    //FORSCHLEIFE ZUM ZÄHLEN///
    for (i = 0; i < 25; i++) { //Zählschleife für 25 Tonabfolgen im Mittel Mode
        computerReihenfolge.push(Math.floor(Math.random() * 5) + 1); //random number wird erstellt (1-5) und pusht dieses in das vorgesehene Array
    }
    console.log(computerReihenfolge); // Konsolenausgabe
    computeranReihe = true; //das Spiel ist dran, spielt dann den Ton ab
    intervalId = setInterval(anreiheSpiel, 800); //Spiel spielt Ton alle 800 millisekunden
}
//-> sehr schwer//
modesehrschwer.addEventListener("click", function () {
    console.log("Button Sehr-Schwer Mode geklickt"); //Konsolenausgabe
    on = true; //spiel gestartet, es ist wahr = on
    sehrschwerchosen = true; //true das Schwierigkeitsgrad Schwer
    leichtchosen = false; //alle anderen die nicht gewählt wurden = false
    mittelchosen = false;
    schwerchosen = false;
    playsehrschwer();
});
function playsehrschwer() {
    gewonnen = false; // Variablen zurückgesetzt
    computerReihenfolge = []; // Array leer, in dem die Reihenfolge gespeichert wird
    spielerReihenfolge = [];
    buttonLeuchten = 0; // Buttons aufgeleuchtet 0x
    intervalId = 0;
    anReihe = 1; //die erste Runde hat angefangen
    anreiheCounter.innerHTML = "1"; // Counter fängt an zu zählen, es ist die erste Runde
    keineFehler = true; //Abfrage ob Spieler Fehler gemacht hat oder nicht 
    //FORSCHLEIFE ZUM ZÄHLEN///
    for (i = 0; i < 35; i++) { //Zählschleife für 35 Tonabfolgen im Mittel Mode
        computerReihenfolge.push(Math.floor(Math.random() * 5) + 1); ///random number wird erstellt (1-5) und pusht dieses in das vorgesehene Array
    }
    console.log(computerReihenfolge); // Konsolenausgabe
    computeranReihe = true; //das Spiel ist dran, spielt dann den Ton ab
    intervalId = setInterval(anreiheSpiel, 800); //Spiel spielt Ton alle 800 millisekunden
}
//step 4: Funktionen für anreiheSpiel: Spieler oder Computer//
function anreiheSpiel() {
    on = false; //Spieler kann keine Buttons drücken
    if (buttonLeuchten == anReihe) { //wenn die Anzahl der aufgeleuchteten Buttons genau gleich die Anzahl der Runden ist, dann ist der Spieler dran
        clearInterval(intervalId); //clearInterval (), um die Zeit anzuhalten
        computeranReihe = false; //Computer nicht mehr an der Reihe
        befehle.innerHTML = "spiele tonabfolge nach!"; //Befehl an den Spieler, Tonfolge nachzuspielen, da er an der Reihe ist
        on = true; //Spieler kann Buttons drücken
    }
    if (computeranReihe) { // wenn der Computer an der Reihe ist
        befehle.innerHTML = "höre gut zu!"; //Befehl an den Spieler zuzuhören
        setTimeout(function () {
            if (computerReihenfolge[buttonLeuchten] == 1)
                obenlinksbutton(); //wenn die erste Stelle im Array abgefragt wird, wird der Button oben links aufgeleuchtet
            if (computerReihenfolge[buttonLeuchten] == 2)
                obenrechtsbutton(); //wenn die zweite Stelle im Array abgefragt wird, wird der Button oben rechts aufgeleuchtet
            if (computerReihenfolge[buttonLeuchten] == 3)
                untenlinksbutton(); //wenn die dritte Stelle im Array abgefragt wird, wird der Button unten links aufgeleuchtet
            if (computerReihenfolge[buttonLeuchten] == 4)
                untenrechtsbutton(); //wenn die vierte Stelle im Array abgefragt wird, wird der Button unten rechts aufgeleuchtet
            if (computerReihenfolge[buttonLeuchten] == 5)
                innenbutton(); //wenn die fünfte Stelle im Array abgefragt wird, wird der Button innen aufgeleuchtet
            buttonLeuchten++; // dann wird die zweite Stelle im Array verglichen usw.
        }, 200); //nach 200ms
    }
}
//step 5: Funktionen für die Buttons, einzelnes aufleuchten//
// -> Computer Version
function obenlinksbutton() {
    if (ton) {
        let sound = new Audio(sounds[0]); //ruft die erste Stelle (den ersten Sound) im "sounds" Array auf
        sound.play(); //ton wird abgespielt
    }
    ton = true; //ton wird abgespielt = true
    obenLinks.style.backgroundColor = "rgb(255, 255, 255)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    setTimeout(() => {
        farbeKlaren();
    }, 300); //nach 300ms
}
function obenrechtsbutton() {
    if (ton) {
        let sound = new Audio(sounds[1]); //ruft die zweite Stelle (den zweiten Sound) im "sounds" Array auf
        sound.play();
    }
    ton = true;
    obenRechts.style.backgroundColor = "rgb(255, 255, 255)";
    setTimeout(() => {
        farbeKlaren();
    }, 300);
}
function untenlinksbutton() {
    if (ton) {
        let sound = new Audio(sounds[2]); //ruft die dritte Stelle (den dritten Sound) im "sounds" Array auf
        sound.play();
    }
    ton = true;
    untenLinks.style.backgroundColor = "rgb(255, 255, 255)";
    setTimeout(() => {
        farbeKlaren();
    }, 300);
}
function untenrechtsbutton() {
    if (ton) {
        let sound = new Audio(sounds[3]); //ruft die vierte Stelle (den vierten Sound) im "sounds" Array auf
        sound.play();
    }
    ton = true;
    untenRechts.style.backgroundColor = "rgb(255, 255, 255)";
    setTimeout(() => {
        farbeKlaren();
    }, 300);
}
function innenbutton() {
    if (ton) {
        let sound = new Audio(sounds[4]); //ruft die fünfte Stelle (den fünften Sound) im "sounds" Array auf
        sound.play();
    }
    ton = true;
    kreisInnen.style.backgroundColor = "rgb(255, 255, 255)";
    setTimeout(() => {
        farbeKlaren();
    }, 300);
}
//step 6: Funktionen für die Buttons, aufleuchten zusammen//
// -> Computer Version
function buttonLeuchtenColor() {
    obenLinks.style.backgroundColor = "rgb(255, 255, 255)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    obenRechts.style.backgroundColor = "rgb(255, 255, 255)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    untenLinks.style.backgroundColor = "rgb(255, 255, 255)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    untenRechts.style.backgroundColor = "rgb(255, 255, 255)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    kreisInnen.style.backgroundColor = "rgb(255, 255, 255)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
}
function farbeKlaren() {
    obenLinks.style.backgroundColor = "rgb(130, 146, 196)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    obenRechts.style.backgroundColor = "rgb(221, 167, 126)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    untenLinks.style.backgroundColor = "rgb(150, 236, 153)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    untenRechts.style.backgroundColor = "rgb(233, 168, 245)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
    kreisInnen.style.backgroundColor = "rgb(165, 165, 165)"; //der Button wurde die Aufleuchtfarbe zugewiesen, und diese leuchtet auf
}
//step 7: Funktionen für die Buttons, einzelnes aufleuchten//
// -> Spieler Version
obenLinks.addEventListener("click", function () {
    if (on) { //wenn das Spiel läuft
        spielerReihenfolge.push(1); //Number of Button wird in das Array der Reihenfolge des Spielers auf 1 gepusht
        pruefen(); //Vergleicht, ob Eingabe == Reihenfolge des Computers
        obenlinksbutton(); //Button Funktion in step5, Aufleuchten des Buttons
        if (!gewonnen) {
            setTimeout(() => {
                farbeKlaren();
            }, 300); //nach 300ms
        }
    }
});
// alle Buttons nach diesem Prinzip ^//
obenRechts.addEventListener("click", function () {
    if (on) {
        spielerReihenfolge.push(2); //Number of Button wird in das Array der Reihenfolge des Spielers auf 2 gepusht
        pruefen();
        obenrechtsbutton();
        if (!gewonnen) {
            setTimeout(() => {
                farbeKlaren();
            }, 300);
        }
    }
});
untenLinks.addEventListener("click", function () {
    if (on) {
        spielerReihenfolge.push(3); //Number of Button wird in das Array der Reihenfolge des Spielers auf 3 gepusht
        pruefen();
        untenlinksbutton();
        if (!gewonnen) {
            setTimeout(() => {
                farbeKlaren();
            }, 300);
        }
    }
});
untenRechts.addEventListener("click", function () {
    if (on) {
        spielerReihenfolge.push(4); //Number of Button wird in das Array der Reihenfolge des Spielers auf 4 gepusht
        pruefen();
        untenrechtsbutton();
        if (!gewonnen) {
            setTimeout(() => {
                farbeKlaren();
            }, 300);
        }
    }
});
kreisInnen.addEventListener("click", function () {
    if (on) {
        spielerReihenfolge.push(5); //Number of Button wird in das Array der Reihenfolge des Spielers auf 5 gepusht
        pruefen();
        innenbutton();
        if (!gewonnen) {
            setTimeout(() => {
                farbeKlaren();
            }, 300);
        }
    }
});
//step 8: Es wird überprüft ob Spielereingaben == Computereingaben entsprechen//
function pruefen() {
    if (spielerReihenfolge[spielerReihenfolge.length - 1] !== computerReihenfolge[spielerReihenfolge.length - 1]) //Vergleicht ob: Array Spielerreihenfolge genau gleich Array Computerreihenfolge
        keineFehler = false; //wenn Vergleich rausstellt, sie stimmen nicht übereinander, dann false
    if (spielerReihenfolge.length == 5 && keineFehler && leichtchosen) { //wenn 5 Runden im Leicht Mode + Ohne Fehler, dann....
        gewonnenGame(); //Spieler gewinnt
    }
    if (spielerReihenfolge.length == 15 && keineFehler && mittelchosen) { //wenn 15 Runden im Mittel Mode + Ohne Fehler, dann....
        gewonnenGame(); //Spieler gewinnt
    }
    if (spielerReihenfolge.length == 25 && keineFehler && schwerchosen) { //wenn 25 Runden im Schwer Mode + Ohne Fehler, dann....
        gewonnenGame(); //Spieler gewinnt
    }
    if (spielerReihenfolge.length == 35 && keineFehler && sehrschwerchosen) { //wenn 35 Runden im Sehr Schwer Mode + Ohne Fehler, dann....
        gewonnenGame(); //Spieler gewinnt
    }
    if (keineFehler == false) { //wenn Spieler Fehler macht, dann false
        verlorenGame(); //es wird die Verlierer Funktion aufgerufen
        ton = false; //kein Ton soll abgespielt werden
    }
    if (anReihe == spielerReihenfolge.length && keineFehler && !gewonnen) {
        anReihe++;
        spielerReihenfolge = [];
        computeranReihe = true;
        buttonLeuchten = 0;
        anreiheCounter.innerHTML = anReihe;
        intervalId = setInterval(anreiheSpiel, 800);
    }
}
//step 9: Gewinnstatus & Verlierstatus//
//-> Funktion fürs Gewinnen vom Spiel//
function gewonnenGame() {
    buttonLeuchtenColor(); //Funktion für das aufleuchten aller Buttons zusammen
    befehle.innerHTML = "SPIEL GEWONNEN!"; //dem Spieler wird angezeigt, dass das Spiel gewonnen wurde
    anreiheCounter.innerHTML = "YAAAY!"; //Counteranzeige zeigt diesen Text
    on = false; //Das Spiel läuft ist false, Spiel kann nichts klicken
    gewonnen = true; //Spiel gewonnen ist true
}
//-> Funktion fürs Verlieren vom Spiel//
function verlorenGame() {
    buttonLeuchtenColor(); //Funktion für das aufleuchten aller Buttons zusammen
    befehle.innerHTML = "GAME OVER!!!"; //dem Spieler wird angezeigt, dass das Spiel verloren wurde
    anreiheCounter.innerHTML = "0"; //Counteranzeige zeigt diesen Text
    setTimeout(() => {
        farbeKlaren();
    }, 800);
    on = false; //Das Spiel läuft ist false, Spiel kann nichts klicken
    gewonnen = false; //Spiel gewonnen ist false
}
//# sourceMappingURL=script.js.map