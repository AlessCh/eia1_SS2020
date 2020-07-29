
window.addEventListener("load", function () {

document.getElementById("pad1").addEventListener("click", function () {playSample("sound_boing.mp3"); });
document.getElementById("pad2").addEventListener("click", function () {playSample("sound_laugh.mp3"); });
document.getElementById("pad3").addEventListener("click", function () {playSample("sound_squeaking.mp3"); });
document.getElementById("pad4").addEventListener("click", function () {playSample("sound_whistle.mp3"); });   
document.getElementById("pad5").addEventListener("click", function () {playSample("sound_yeah.mp3"); });


//8.6 play sample + new audio//

function playSample(mp3: string): void {
    const sound: HTMLAudioElement = new Audio(mp3);
    sound.play();
}
});