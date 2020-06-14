"use strict";
//aufgabe 7.1: drumpad//
var padsound1 = new Audio("A.mp3");
var padsound2 = new Audio("C.mp3");
var padsound3 = new Audio("F.mp3");
var padsound4 = new Audio("G.mp3");
var padsound5 = new Audio("hihat.mp3");
var padsound6 = new Audio("kick.mp3");
var padsound7 = new Audio("laugh-1.mp3");
var padsound8 = new Audio("laugh-2.mp3");
var padsound9 = new Audio("snare.mp3");
var drumpad = [padsound1, padsound2, padsound3, padsound4, padsound5, padsound6, padsound7, padsound8, padsound9];
function playSample(sound) {
    sound.play();
}
//aufgabe 7.2: drum machine//
function drummachine() {
    setInterval(function () {
        playSample(drumpad[5]);
        playSample(drumpad[8]);
        playSample(drumpad[4]);
    }, 200);
}
window.addEventListener("load", function () {
    document.getElementById("pad1").addEventListener("click", function () { playSample(drumpad[0]); });
    document.getElementById("pad2").addEventListener("click", function () { playSample(drumpad[1]); });
    document.getElementById("pad3").addEventListener("click", function () { playSample(drumpad[2]); });
    document.getElementById("pad4").addEventListener("click", function () { playSample(drumpad[3]); });
    document.getElementById("pad5").addEventListener("click", function () { playSample(drumpad[4]); });
    document.getElementById("pad6").addEventListener("click", function () { playSample(drumpad[5]); });
    document.getElementById("pad7").addEventListener("click", function () { playSample(drumpad[6]); });
    document.getElementById("pad8").addEventListener("click", function () { playSample(drumpad[7]); });
    document.getElementById("pad9").addEventListener("click", function () { playSample(drumpad[8]); });
    document.getElementById("playbutton").addEventListener("click", drummachine);
});
//# sourceMappingURL=script.js.map