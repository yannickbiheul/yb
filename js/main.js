// PRESENTATION

let pres1 = document.querySelector('.presentation1');
let pres2 = document.querySelector('.presentation2');
let pres3 = document.querySelector('.presentation3');
let presentations = [pres1, pres2, pres3];

let left = document.querySelector('.left');
let right = document.querySelector('.right');

right.addEventListener("click", function() {
    if (presentations[0].style.display != "none") {
        presentations[0].style.display = "none";
        presentations[1].style.display = "flex";
    } else if (presentations[1].style.display != "none") {
        presentations[1].style.display = "none";
        presentations[2].style.display = "flex";
    } else {
        presentations[2].style.display = "none";
        presentations[0].style.display = "flex";
    }
})

left.addEventListener("click", function() {
    if (presentations[0].style.display != "none") {
        presentations[0].style.display = "none";
        presentations[2].style.display = "flex";
    } else if (presentations[1].style.display != "none") {
        presentations[1].style.display = "none";
        presentations[2].style.display = "none";
        presentations[0].style.display = "flex";
    } else {
        presentations[2].style.display = "none";
        presentations[1].style.display = "flex";
    }
})

