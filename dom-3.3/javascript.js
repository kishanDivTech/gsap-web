// let title = document.getElementById("title")
// console.log(title);
// alert(title)
// title.innerText = "kishan yadav"
// title.innerHTML = "<h2>welcome</h2>"

// let data = document.getElementById("title")
// data.style.color = "red"
// data.style.backgroundColor = "black"
// data.style.padding = "20px"


// let data = document.getElementById("btn")
// data.addEventListener("click", function () {
//     // alert("Button Click")
//     data.innerText = "Button Click"
//     data.style.color = "red"
//     data.style.padding = "22px"
//     data.style.border = "none"
//     data.style.fontSize = "25px"
// })

// let title = document.getElementById("title")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     title.innerText = "welcome to dom"
//     title.style.color = "red"
//     title.style.padding = "20px"
//     title.style.backgroundColor = "black"
//     title.style.width = "fit-content"
// })

// let title = document.getElementById("title")
// let hide = document.getElementById("hide")
// let show = document.getElementById("show")

// hide.addEventListener("click", function () {
//     title.style.display = "none"
// })

// show.addEventListener("click", function () {
//     title.style.display = "block"
//     title.style.padding = "20px"
//     title.style.backgroundColor = "yellow"
//     title.style.color = "red"
// })


// let title = document.getElementById("title")
// let btn = document.getElementById("btn")


// btn.addEventListener("click", function () {
//     if (title.style.display == "none") {
//         title.style.display = "block"
//         title.style.padding = "20px"
//         title.style.backgroundColor = "yellow"
//         title.style.color = "red"
//     } else {
//         title.style.display = "none"
//     }
// })

// let data = document.querySelector("#heading")
// console.log(data)
// console.log(data.innerText)

// let data = document.querySelectorAll("p")
// console.log(data)
// data.forEach(function (ele) {
//     ele.style.color = "red"
//     ele.style.backgroundColor = "yellow"
//     ele.style.padding = "20px"
// })

// let heading = document.createElement("h1")
// heading.innerText = "New Heading"
// document.body.appendChild(heading)


// let h1 = document.createElement("h1")
// h1.innerText = "New Element"
// document.body.appendChild(h1)

// let data = document.getElementById("box")
// let h1 = document.createElement("h1")
// h1.innerText = "Create Element"
// data.appendChild(h1)


// let deleteH1 = document.getElementById("title")
// let btn = document.getElementById("btn")
// btn.addEventListener("click", function () {
//     deleteH1.remove()
// })


// let input = document.getElementById("username")
// let bnt = document.getElementById("btn")
// let output = document.getElementById("output")

// bnt.addEventListener("click", function () {
//     console.log(input.value)
//     output.innerText = input.value
// })

// let input = document.getElementById("input")
// let title = document.getElementById("title")

// input.addEventListener("keyup", function () {
//     title.innerText = input.value
// })


// let counter = 0
// let output = document.getElementById("counter")
// let inc = document.getElementById("inc")
// let dec = document.getElementById("dec")
// let reset = document.getElementById("reset")

// inc.addEventListener("click", function () {
//     counter++;
//     output.innerText = counter
// })

// dec.addEventListener("click", function () {
//     counter--;
//     output.innerText = counter;
// })

// reset.addEventListener("click", function () {
//     counter = 0
//     output.innerText = counter
// })

// let title = document.getElementById("title")
// title.classList.add("active")
// title.classList.remove("active")


// let body = document.getElementById("body")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     body.classList.toggle("dark")
// })


// const btn = document.getElementById("btn")
// const img = document.getElementById("img")

// btn.addEventListener("click", function () {
//     img.src = "https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
// })



// let name = document.getElementById("name")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     if (name.value === "") {
//         alert("Please enter Your Name")
//     } else {
//         alert("form submitted")
//     }
// })

let title = document.getElementById("title")
title.addEventListener("mouseover", function () {
    title.style.color = "red"
})

title.addEventListener("mouseout", function () {
    title.style.color = "black"
})

title.addEventListener("mouseleave", function () {
    title.style.color = "green"
})

title.addEventListener("mouseenter", function () {
    title.style.color = "blue"
})

title.addEventListener("mousedown", function () {
    title.style.color = "yellow"
})