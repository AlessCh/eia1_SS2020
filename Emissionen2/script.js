"use strict";
window.addEventListener("load", function () {
    document.querySelector(".EU").addEventListener("click", Europe);
    document.querySelector(".NA").addEventListener("click", NorthAmerica);
    document.querySelector(".SA").addEventListener("click", SouthAmerica);
    document.querySelector(".AFR").addEventListener("click", Africa);
    document.querySelector(".AS").addEventListener("click", Asia);
    document.querySelector(".AUS").addEventListener("click", Australia);
    function Europe() {
        document.getElementById("titleRegion").innerHTML = "Europe";
        document.getElementById("h1").innerHTML = "4209.3";
        document.getElementById("h2").innerHTML = "14,801%";
        document.getElementById("h3").innerHTML = "-15,43%";
        document.getElementById("h4").innerHTML = "-756,40";
        document.getElementById("t1").innerHTML = "Europe";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 14.801%");
    }
    function NorthAmerica() {
        document.getElementById("titleRegion").innerHTML = "North America";
        document.getElementById("h1").innerHTML = "6035.6";
        document.getElementById("h2").innerHTML = "20,465%";
        document.getElementById("h3").innerHTML = "-8,335&";
        document.getElementById("h4").innerHTML = "-564,80";
        document.getElementById("t1").innerHTML = "North America";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 20.465%");
    }
    function SouthAmerica() {
        document.getElementById("titleRegion").innerHTML = "South America";
        document.getElementById("h1").innerHTML = "1261.5";
        document.getElementById("h2").innerHTML = "4,127%";
        document.getElementById("h3").innerHTML = "9,43%";
        document.getElementById("h4").innerHTML = "128,90";
        document.getElementById("t1").innerHTML = "South America";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4.127%");
    }
    function Africa() {
        document.getElementById("titleRegion").innerHTML = "Africa";
        document.getElementById("h1").innerHTML = "1235.5";
        document.getElementById("h2").innerHTML = "3,75%";
        document.getElementById("h3").innerHTML = "16,68%";
        document.getElementById("h4").innerHTML = "207,50";
        document.getElementById("t1").innerHTML = "Africa";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 3.75%");
    }
    function Asia() {
        document.getElementById("titleRegion").innerHTML = "Asia";
        document.getElementById("h1").innerHTML = "16274.1";
        document.getElementById("h2").innerHTML = "50,197%";
        document.getElementById("h3").innerHTML = "19,971%";
        document.getElementById("h4").innerHTML = "3.319,40";
        document.getElementById("t1").innerHTML = "Asia";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 50.197%");
    }
    function Australia() {
        document.getElementById("titleRegion").innerHTML = "Australia";
        document.getElementById("h1").innerHTML = "2100.5";
        document.getElementById("h2").innerHTML = "6,655%";
        document.getElementById("h3").innerHTML = "4,879%";
        document.getElementById("h4").innerHTML = "107,50";
        document.getElementById("t1").innerHTML = "Australia";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 6.655%");
    }
});
//# sourceMappingURL=script.js.map