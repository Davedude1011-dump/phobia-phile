function common() {
    document.getElementById("common").style.display = "block"
    document.getElementById("rare").style.display = "none"
    document.getElementById("strange").style.display = "none"

    document.getElementById("boxBar1").style.backgroundColor = "white"
    document.getElementById("boxBar2").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar3").style.backgroundColor = "lightgrey"
}

function rare() {
    document.getElementById("common").style.display = "none"
    document.getElementById("rare").style.display = "block"
    document.getElementById("strange").style.display = "none"

    document.getElementById("boxBar1").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar2").style.backgroundColor = "white"
    document.getElementById("boxBar3").style.backgroundColor = "lightgrey"
}

function strange() {
    document.getElementById("common").style.display = "none"
    document.getElementById("rare").style.display = "none"
    document.getElementById("strange").style.display = "block"

    document.getElementById("boxBar1").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar2").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar3").style.backgroundColor = "white"
}