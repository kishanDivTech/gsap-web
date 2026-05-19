// let heading = document.getElementById("title")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     heading.innerText = "Dom Change😊";
//     heading.style.color = "red";
// })

// let data = document.querySelector(".box")
// data.style.color = "blue"
// data.style.backgroundColor = "black"
// data.style.padding = "20px"

// let p = document.querySelectorAll("p")
// p.forEach(function (elem) {
//     elem.style.color = "blue"
// })



let data = document.getElementById("title")
console.log(data)

function changeText() {
    let data = document.getElementById("title")
    data.innerText = "java script study"
    data.style.color = "red"
}

function colorChange() {
    let data = document.getElementById("title-one")
    data.style.color = "blue"
}


function darkMode() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}

function lightMode() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
}


function show() {
    let data = document.getElementById("input").value
    alert(data)
    console.log(object)
}

function showData() {
    let data = document.getElementById("username").value
    document.getElementById("output").innerText = data
    alert(data)

}

function hide() {
    let data = document.getElementById("titleTwo")
    data.style.display = "none"
}

function showElement() {
    let data = document.getElementById("titleTwo")
    data.style.display = "block"
}

let btnTwo = document.getElementById("btn-two")
btnTwo.addEventListener("click", function () {
    alert("Button Clicked")
})

let btnData = document.getElementById("box-1")
btnData.addEventListener("click", function () {
    btnData.style.backgroundColor = "black"
    btnData.style.color = "white"
})

let hoverBtn = document.getElementById("hover-btn")
hoverBtn.addEventListener("mouseover", function () {
    hoverBtn.style.backgroundColor = "white"
    hoverBtn.style.color = "black"
})


function add() {
    let h1 = document.createElement("h1")
    h1.innerText = "New Element"
    document.body.appendChild(h1)
}

let hoverBox = document.getElementById("mouseLeave");
hoverBox.addEventListener("mouseleave", function () {
    hoverBox.style.backgroundColor = "black"
    hoverBox.style.color = "white"
})


let num = 0;

function plus() {

    num++;

    document.getElementById("count")
        .innerText = num;
}

function minus() {

    num--;

    document.getElementById("count")
        .innerText = num;
}