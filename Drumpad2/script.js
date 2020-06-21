"use strict";
window.addEventListener("load", function () {
    document.getElementById("pad1").addEventListener("click", function () { playSample("A.mp3"); });
    document.getElementById("pad2").addEventListener("click", function () { playSample("C.mp3"); });
    document.getElementById("pad3").addEventListener("click", function () { playSample("F.mp3"); });
    document.getElementById("pad4").addEventListener("click", function () { playSample("G.mp3"); });
    document.getElementById("pad5").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.getElementById("pad6").addEventListener("click", function () { playSample("kick.mp3"); });
    document.getElementById("pad7").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.getElementById("pad8").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.getElementById("pad9").addEventListener("click", function () { playSample("snare.mp3"); });
    document.getElementById("playbutton").addEventListener("click", playbutton);
    document.getElementById("recordbutton").addEventListener("click", aufnahme);
    document.getElementById("deletebutton").addEventListener("click", function () { beat = []; }); //8.4: Beat löschen //
    //8.2 Beat on Loop//
    var beat = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var wert = 0;
    var interbeat;
    function playBeat() {
        interbeat = setInterval(function () {
            playSample(beat[wert]);
            wert++;
            if (wert >= beat.length) {
                wert = 0;
            }
        }, 300);
    }
    //8.6 play sample + new audio//
    function playSample(mp3) {
        if (buttonaufnahme) {
            beat.push(mp3);
        }
        const sound = new Audio(mp3);
        sound.play();
    }
    //8.3: Beat abspielen und stoppen //
    function playbutton() {
        var playstopbutton = document.getElementById("playbutton");
        if (playstopbutton.getAttribute("class") == "fa fa-play-circle fa-5x") {
            playstopbutton.setAttribute("class", "fa fa-stop-circle fa-5x");
            playBeat();
        }
        else {
            playstopbutton.setAttribute("class", "fa fa-play-circle fa-5x");
            stopBeat();
        }
    }
    function stopBeat() {
        clearInterval(interbeat);
    }
    //8.5: Aufnahme des Beats //
    var buttonaufnahme = false;
    function aufnahme() {
        if (buttonaufnahme) {
            buttonaufnahme = false;
        }
        else {
            buttonaufnahme = true;
        }
    }
});
//# sourceMappingURL=script.js.map