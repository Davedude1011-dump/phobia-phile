var currentPage = "One"
function common() {
    document.getElementById("common").style.display = "block"
    document.getElementById("rare").style.display = "none"
    document.getElementById("strange").style.display = "none"

    document.getElementById("boxBar1").style.backgroundColor = "white"
    document.getElementById("boxBar2").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar3").style.backgroundColor = "lightgrey"

    currentPage = "One"
}

function rare() {
    document.getElementById("common").style.display = "none"
    document.getElementById("rare").style.display = "block"
    document.getElementById("strange").style.display = "none"

    document.getElementById("boxBar1").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar2").style.backgroundColor = "white"
    document.getElementById("boxBar3").style.backgroundColor = "lightgrey"

    currentPage = "Two"
}

function strange() {
    document.getElementById("common").style.display = "none"
    document.getElementById("rare").style.display = "none"
    document.getElementById("strange").style.display = "block"

    document.getElementById("boxBar1").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar2").style.backgroundColor = "lightgrey"
    document.getElementById("boxBar3").style.backgroundColor = "white"

    currentPage = "Three"
}

function Box1Hover() {
    document.getElementById("boxBar1").style.backgroundColor = "white"
}
function Box2Hover() {
    document.getElementById("boxBar2").style.backgroundColor = "white"
}
function Box3Hover() {
    document.getElementById("boxBar3").style.backgroundColor = "white"
}

function Box1NotHover() {
    if (currentPage === "One") {
        document.getElementById("boxBar1").style.backgroundColor = "white"
    }
    else {
        document.getElementById("boxBar1").style.backgroundColor = "lightgrey"
    }
}
function Box2NotHover() {
    if (currentPage === "Two") {
        document.getElementById("boxBar2").style.backgroundColor = "white"
    }
    else {
        document.getElementById("boxBar2").style.backgroundColor = "lightgrey"
    }
}
function Box3NotHover() {
    if (currentPage === "Three") {
        document.getElementById("boxBar3").style.backgroundColor = "white"
    }
    else {
        document.getElementById("boxBar3").style.backgroundColor = "lightgrey"
    }
}