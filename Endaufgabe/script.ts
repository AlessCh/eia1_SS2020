var button1: HTMLAudioElement = new Audio("sound_boing.mp3");
var button2: HTMLAudioElement = new Audio("sound_kids_booo.mp3");
var button3: HTMLAudioElement = new Audio("sound_whistle.mp3");
var button4: HTMLAudioElement = new Audio("sound_yeah.mp3");
var button5: HTMLAudioElement = new Audio("sound_squeaking.mp3");

function playSample(sound: HTMLAudioElement) {
    sound.play();
    }
    
window.addEventListener("load", function () {
    document.getElementById("button1").addEventListener("click", function () { playSample(drumpad[0]); });
    document.getElementById("button2").addEventListener("click", function () { playSample(drumpad[1]); });
    document.getElementById("button3").addEventListener("click", function () { playSample(drumpad[2]); });
    document.getElementById("button4").addEventListener("click", function () { playSample(drumpad[3]); });
    document.getElementById("button5").addEventListener("click", function () { playSample(drumpad[4]); });

});