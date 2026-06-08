console.log("Living Forest V1 Loaded");

// future systems will come here:
// - weather system
// - movement system
// - survival system
let player = document.getElementById("player");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let speed = 5;

document.addEventListener("keydown", function(e){

if(e.key === "ArrowUp"){
y -= speed;
}

if(e.key === "ArrowDown"){
y += speed;
}

if(e.key === "ArrowLeft"){
x -= speed;
}

if(e.key === "ArrowRight"){
x += speed;
}

player.style.left = x + "px";
player.style.top = y + "px";

});
