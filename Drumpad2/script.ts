
window.addEventListener("load", function () {

document.getElementById("pad1").addEventListener("click", function () {playSample("A.mp3"); });
document.getElementById("pad2").addEventListener("click", function () {playSample("C.mp3"); });
document.getElementById("pad3").addEventListener("click", function () {playSample("F.mp3"); });
document.getElementById("pad4").addEventListener("click", function () {playSample("G.mp3"); });   
document.getElementById("pad5").addEventListener("click", function () {playSample("hihat.mp3"); });
document.getElementById("pad6").addEventListener("click", function () {playSample("kick.mp3"); });
document.getElementById("pad7").addEventListener("click", function () {playSample("laugh-1.mp3"); });
document.getElementById("pad8").addEventListener("click", function () {playSample("laugh-2.mp3"); });
document.getElementById("pad9").addEventListener("click", function () {playSample("snare.mp3"); });
document.getElementById("playbutton").addEventListener("click", playbutton);
document.getElementById("recordbutton").addEventListener("click", aufnahme);
document.getElementById("deletebutton").addEventListener("click", function () {defbeat = [];});             //8.4: Beat löschen //

//8.2 Beat on Loop//

var defbeat: string[] = ["kick.mp3", "snare.mp3", "hihat.mp3"];
var n: number = 0;
var interbeat: number;

function playBeat() {
    interbeat = setInterval(function () {
    playSample(defbeat[n]);
    n++;
    
    if (n >= defbeat.length) {
    n = 0;
    }
    },                      300);
}


//8.6 new audio//

function playSample(mp3: string): void {
    if (rec) {
    defbeat.push(mp3);
    }
    const sound: HTMLAudioElement = new Audio(mp3);
    sound.play();
}

//8.3: Beat abspielen und stoppen //

function playbutton(): void {
    
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

var rec: boolean = false;

function aufnahme(): void {
    if (rec) {
    rec = false;
    }
    
    else {
    rec = true;
    }
}

});