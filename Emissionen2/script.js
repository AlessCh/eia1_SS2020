"use strict";
//world//
var EU2018 = 4209.3;
var NA2018 = 6035.6;
var SA2018 = 1261.5;
var AFR2018 = 1235.5;
var AS2018 = 16274.1;
var AUS2018 = 2100.5;
W2018 = AFR2018 + SA2018 + EU2018 + NA2018 + AS2018 + AUS2018;
var W2018;
//world end//
//EUROPA START//
function Europa() {
    var EU2008 = 4965.7;
    var EU2018 = 4209.3;
    var EUGesE = Math.round(EU2018 / W2018 * 100);
    var EU0818 = Math.round(Eu2018 / EU2008 * 100);
    var EU = 100 - EU0818;
    var EU0818kg = Math.round(EU2018 - EU2008);
    document.querySelector(".EU").addEventListener("click", function () {
        document.getElementById("titleRegion").innerHTML = "Europe";
        document.getElementById("chart").setAttribute("style", "height: 14.80%");
        document.querySelector(".absolut18").innerHTML = EU2018 + " kg";
        document.querySelector(".absolut18p").innerHTML = "Emission absolute of Europe in 2018";
        document.querySelector(".relativ").innerHTML = EUGesE + "%";
        document.querySelector(".wachstum1").innerHTML = EU0818 + "%";
        document.querySelector(".wachstum2").innerHTML = EU0818kg + " kg";
    });
}
//EUROPA END//
//NORDAMERIKA START//
function NordAmerika() {
    var NA2008 = 6600.4;
    var NA2018 = 6035.6;
    var NAGesE = Math.round(NA2018 / W2018 * 100);
    var NA0818 = Math.round(NA2018 / NA2008 * 100);
    var NA = 100 - NA0818;
    var NA0818kg = Math.round(NA2018 - NA2008);
    document.querySelector(".NA").addEventListener("click", function () {
        document.getElementById("titleRegion").innerHTML = "North America";
        document.getElementById("chart").setAttribute("style", "height: 20.465%");
        document.querySelector(".absolut18").innerHTML = AFR2018 + " kg";
        document.querySelector(".absolut18p").innerHTML = "Emission absolute of North America in 2018";
        document.querySelector(".relativ").innerHTML = NAGesE + "%";
        document.querySelector(".wachstum1").innerHTML = NA0818 + "%";
        document.querySelector(".wachstum2").innerHTML = NA0818kg + " kg";
    });
}
//NORDAMERIKA END//
//SÜDAMERIKA START//
function SüdAmerika() {
    var SA2008 = 1132.6;
    var SA2018 = 1261.5;
    var SAGesE = Math.round(SA2018 / W2018 * 100);
    var SA0818 = Math.round(SA2018 / SA2008 * 100);
    var SA = 100 - SA0818;
    var SA0818kg = Math.round(SA2018 - SA2008);
    document.querySelector(".SA").addEventListener("click", function () {
        document.getElementById("titleRegion").innerHTML = "South America";
        document.getElementById("chart").setAttribute("style", "height: 4.126%");
        document.querySelector(".absolut18").innerHTML = SA2018 + " kg";
        document.querySelector(".absolut18p").innerHTML = "Emission absolute of South America in 2018";
        document.querySelector(".relativ").innerHTML = SAGesE + "%";
        document.querySelector(".wachstum1").innerHTML = SA0818 + "%";
        document.querySelector(".wachstum2").innerHTML = SA0818kg + " kg";
    });
}
//SÜDAMERIKA END//
//AFRIKA START//
function Afrika() {
    var AFR2008 = 1.028;
    var AFR2018 = 1235.5;
    var AFRGesE = Math.round(AFR2018 / W2018 * 100);
    var AFR0818 = Math.round(AFR2018 / AFR2008 * 100);
    var AFR = 100 - AFR0818;
    var AFR0818kg = Math.round(AFR2018 - AFR2008);
    document.querySelector(".AFR").addEventListener("click", function () {
        document.getElementById("titleRegion").innerHTML = "Africa";
        document.getElementById("chart").setAttribute("style", "height: 3.754%");
        document.querySelector(".absolut18").innerHTML = AFR2018 + " kg";
        document.querySelector(".absolut18p").innerHTML = "Emission absolute of Africa in 2018";
        document.querySelector(".relativ").innerHTML = AFRGesE + "%";
        document.querySelector(".wachstum1").innerHTML = AFR0818 + "%";
        document.querySelector(".wachstum2").innerHTML = AFR0818kg + " kg";
    });
}
//AFRIKA END//
//ASIEN START//
function Asien() {
    var AS2008 = 12954.7;
    var AS2018 = 16274.1;
    var ASGesE = Math.round(AS2018 / W2018 * 100);
    var AS0818 = Math.round(AS2018 / AS2008 * 100);
    var AS = 100 - AS0818;
    var AS0818kg = Math.round(AS2018 - AS2008);
    document.querySelector(".AS").addEventListener("click", function () {
        document.getElementById("titleRegion").innerHTML = "Asia";
        document.getElementById("chart").setAttribute("style", "height: 50.197%");
        document.querySelector(".absolut18").innerHTML = AS2018 + " kg";
        document.querySelector(".absolut18p").innerHTML = "Emission absolute of Asia in 2018";
        document.querySelector(".relativ").innerHTML = ASGesE + "%";
        document.querySelector(".wachstum1").innerHTML = AS0818 + "%";
        document.querySelector(".wachstum2").innerHTML = AS0818kg + " kg";
    });
}
//ASIEN END//
//AUSTRALIEN START//
function Australien() {
    var AUS2008 = 1993;
    var AUS2018 = 2100.5;
    var AUSGesE = Math.round(AUS2018 / W2018 * 100);
    var AUS0818 = Math.round(AUS2018 / AUS2008 * 100);
    var AUS = 100 - AUS0818;
    var AUS0818kg = Math.round(AUS2018 - AUS2008);
    document.querySelector(".AUS").addEventListener("click", function () {
        document.getElementById("titleRegion").innerHTML = "Australia";
        document.getElementById("chart").setAttribute("style", "height: 6.654%");
        document.querySelector(".absolut18").innerHTML = AUS2018 + " kg";
        document.querySelector(".absolut18p").innerHTML = "Emission absolute of Australia in 2018";
        document.querySelector(".relativ").innerHTML = AUSGesE + "%";
        document.querySelector(".wachstum1").innerHTML = AUS0818 + "%";
        document.querySelector(".wachstum2").innerHTML = AUS0818kg + " kg";
    });
}
//# sourceMappingURL=script.js.map