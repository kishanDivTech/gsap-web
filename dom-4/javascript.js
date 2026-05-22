// const title = document.getElementById("title");
// console.log(title)
// alert(title.innerText)
// title.style.color = "red"
// title.style.backgroundColor = "black"
// title.innerText = "welcome to dom"
// title.innerHTML = "<h2>New Test</h2>"



// let heading = document.getElementById("heading")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     heading.innerText = "Dom change"
// })

// let title = document.getElementById("title")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     title.innerText = "Dom Change"
// })


// let box = document.getElementById("box")
// let change = document.getElementById("change");

// change.addEventListener("click", function () {
//     box.style.width = "300px"
//     box.style.height = "300px"
//     box.style.backgroundColor = "blue"
//     box.style.margin = "auto"
//     box.style.borderRadius = "50%"
// })

// let text = document.getElementById("text")
// let hide = document.getElementById("hide")
// let show = document.getElementById("show")

// hide.addEventListener("click", function () {
//     text.style.display = "none"
// })

// show.addEventListener("click", function () {
//     text.style.display = "block"
// })


// let img = document.getElementById("img")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     img.src = `https://images.unsplash.com/photo-1779226347540-0393047b97b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8`
// })


// let input = document.getElementById("username")
// let btn = document.getElementById("btn")
// let result = document.getElementById("result")

// btn.addEventListener("click", function () {
//     result.innerText = input.value
// })

// let list = document.getElementById("list")
// let btn = document.getElementById("btn")

// btn.addEventListener("click", function () {

//     let li = document.createElement("li")
//     li.innerText = "New Item"
//     list.appendChild(li)
// })


// let item = document.getElementById("item")
// let btn = document.getElementById("remove")

// btn.addEventListener("click", function () {
//     item.remove()
// })


// let title = document.querySelector(".title")
// console.log(title)
// console.log(title.innerText)

// const title = document.querySelector("#title")
// console.log(title)
// console.log(title.innerText)

// const titleOne = document.querySelectorAll("#title")
// console.log(titleOne)
// titleOne.forEach(function (elem) {
//     console.log(elem.innerText)
// })


// const data = document.querySelectorAll("p")
// console.log(data)
// data.forEach(function (elem) {
//     console.log(elem.innerText)
// })


// const title = document.getElementById("title")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function () {
//     title.classList.toggle("active")
// })


// let count = 0;
// let output = document.getElementById("count")
// let inc = document.getElementById("inc")
// let dec = document.getElementById("dec")
// let reset = document.getElementById("reset")

// inc.addEventListener("click", function () {
//     count++
//     output.innerText = count
// })

// dec.addEventListener("click", function () {
//     count--
//     output.innerText = count
// })
// reset.addEventListener("click", function () {
//     count = 0
//     output.innerText = count
// })

// let btn = document.getElementById("btn")
// btn.addEventListener("click", function () {
//     alert("button Clicked")
// })

// let box = document.getElementById("box1")
// box.addEventListener("dblclick", function () {
//     box.style.background = "blue"
// })

// let box2 = document.getElementById("box2")
// box2.addEventListener("mouseenter", function () {
//     box2.style.background = "red"
// })

// box2.addEventListener("mouseleave", function () {
//     box2.style.background = "green"
// })

// let coords = document.getElementById("coords");
// document.addEventListener("mousemove", function (dets) {
//     coords.innerText = `X: ${dets.x} Y: ${dets.y}`
// })


// let mouseValue = document.getElementById("mouse-value")
// document.addEventListener("mousemove", function (dets) {
//     mouseValue.innerText = `X: ${dets.x} Y: ${dets.y}`
// })

// box2.addEventListener("mousedown", function () {
//     box.style.scale = '0.5'
// })


let card = document.getElementById("card")

card.addEventListener("mouseenter", function () {
    card.style.background = "purple"
    card.style.transform = "scale(1.1)"
})

card.addEventListener("mouseleave", function () {
    card.style.background = "black"
    card.style.transform = "scale(1)"
})