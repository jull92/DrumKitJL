let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

document.addEventListener('keypress', (keyValue) => {
    // a
    if (keyValue.keyCode == 97) {
        boom.play();
    }
    // s
    else if (keyValue.keyCode == 115) {
        clap.play();
    }
    // d
    else if (keyValue.keyCode == 100) {
        hihat.play();
    }
    // f
    else if (keyValue.keyCode == 102) {
        kick.play();
    }
    // g
    else if (keyValue.keyCode == 103) {
        openhat.play();
    }
    // h
    else if (keyValue.keyCode == 104) {
        ride.play();
    }
    // j
    else if (keyValue.keyCode == 106) {
        snare.play();
    }
    // k
    else if (keyValue.keyCode == 107) {
        tink.play();
    }
    // l
    else if (keyValue.keyCode == 108) {
        tom.play();
    }
})