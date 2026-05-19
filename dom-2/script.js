// let title = document.getElementById("title");
// title.innerText = "hello world"
// console.log(title)
// // alert(title.innerText)

// let boxValue = document.getElementById("box")
// boxValue.innerHTML = "<h1>Hello DOM</h1>"

// let heading = document.getElementById("heading")
// heading.style.color = "red"
// heading.style.fontSize = "50px"
// heading.style.textAlign = "center"
// heading.style.backgroundColor = "yellow"

// let btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//     console.log("checked")
// })

// let photo = document.getElementById("photo")
// let data = photo.src
// console.log(data)
// photo.src = 'https://images.unsplash.com/photo-1778846802392-c7cf7ae38458?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// let newData = photo.src
// console.log(newData)

// let hData = document.getElementById("oldData")
// let bData = document.getElementById("update")

// bData.addEventListener("click", function () {
//     hData.innerText = "Heading Updated"
//     hData.style.color = "blue"
//     hData.style.fontSize = "40px"
//     hData.style.textAlign = "center"
//     hData.style.backgroundColor = "black"
//     hData.style.padding = "20px"
// })


// let text = document.getElementById("text")
// let hide = document.getElementById("hide")
// let show = document.getElementById("show")

// hide.addEventListener("click", function () {
//     text.style.display = "none"
// })

// show.addEventListener("click", function () {
//     text.style.display = "block"
//     text.style.color = "red"
//     text.style.fontSize = "30px"
//     text.style.textAlign = "center"
//     text.style.backgroundColor = "yellow"
// })

// let selectorData = document.querySelector(".title")
// console.log(selectorData)

// let all = document.querySelectorAll("p")
// console.log(all)
// all.forEach(function (elem) {
//     elem.style.color = "green"
//     elem.style.fontSize = "25px"
//     elem.style.textAlign = "center"
//     elem.style.backgroundColor = "lightblue"
// })

// let allName = document.querySelectorAll("p")
// console.log(allName)
// all.forEach(function (elem) {
//     elem.style.color = "Black"
//     elem.style.fontSize = "25px"
//     elem.style.textAlign = "center"
//     elem.style.backgroundColor = "lightgreen"
//     elem.style.padding = "20px"
// })

let title = document.getElementById("title");

title.classList.add("active");