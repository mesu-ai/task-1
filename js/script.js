function bulbOnOff() {
    const image = document.getElementById("bulbImage");

    if (image.src.match("ONbulb.jpg")) {
        image.src = "/images/OFFbulb.jpg"
    }
    else {
        image.src = "/images/ONbulb.jpg"
    }
}