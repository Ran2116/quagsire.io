

document.getElementById("fullmoon_text").onclick = function () {
    document.getElementById("special").innerHTML = word[Math.floor(Math.random() * word.length)];
};

let word = [ "crooked whisper", "melting pebble",  "hollow lantern","restless marrow","sticky horizon", "fragile thunder", "sleepy furnace",  "fuzzy ripple", "twisting meadow","shivering pocket"
]

document.getElementById("fullmoon").onmouseenter = function () {
    document.getElementById("special2").style.color = "blue";
    document.getElementById("water_gif").style.backgroundImage = "conic-gradient(white, black, navy, pink, orange, green)";
    document.getElementById("fullmoon_pic3").style.opacity = "0.4";
};

document.getElementById("fullmoon_pic2").onmouseenter = function () {
    this.style.opacity = ".6";
    this.style.width = "100vw";
    this.style.bottom = "1vw";
    this.style.left = "1vw";
}

document.getElementById("fullmoon_pic2").onmouseout = function () {
    this.style.opacity = "1";
    this.style.width = "10vw";
    this.style.left = "2px";
    this.style.top = "1vw";
}




let allcolors = ["blue", "green", "yellow", "red", "black", "white", "pink", "purple", "navy", "orange", "turquoise"]

document.getElementById("fullmoon_note").onclick = function () {
    document.body.style.backgroundColor = allcolors[Math.floor(Math.random() * allcolors.length)];
    document.getElementById("fullmoon_text").style.borderColor = allcolors[Math.floor(Math.random() * allcolors.length)];

}

