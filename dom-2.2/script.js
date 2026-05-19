let title = document.getElementById("title");
title.classList.add("active")


let remove = document.getElementById("remove")
remove.classList.add("active")
remove.classList.remove("active")

let img = document.getElementById("img")
img.setAttribute('src', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')
img.style.backgroundPosition = "center"
img.style.backgroundSize = "cover"
img.style.backgroundRepeat = "no-repeat"
img.style.width = "500px"
img.style.height = "500px"

let value = img.getAttribute("src")
console.log(value)



let h1 = document.createElement("h1")
h1.innerText = "New Element"
document.getElementById("box").appendChild(h1)


let h2 = document.createElement("h2")
document.getElementById("box2").appendChild(h2)
h2.innerText = "div system"

let deleteTitle = document.getElementById("titleDelete")
deleteTitle.remove()

let child = document.getElementById("child")
// console.log(child.ownerDocument)
console.log(child.parentElement)
console.log(child.parentNode)

let parentData = document.getElementById("parent")
console.log(parentData.children)


let count = 0;
let countText = document.getElementById("count")

document.getElementById("increment").addEventListener("click", function () {
    count++;
    countText.innerText = count
})

document.getElementById("decrement").addEventListener("click", function () {
    count--;
    countText.innerText = count
})

let cValue = 0

let CountValue = document.getElementById("CountValue")

document.getElementById("MIcrement").addEventListener("click", function () {
    cValue++;
    CountValue.innerText = `Count Value ${cValue}`;
})


document.getElementById("MDecrement").addEventListener("click", function () {
    {
        cValue--;
        CountValue.innerText = `Count value ${cValue}`;
    }
})


let input = document.getElementById("input")
let output = document.getElementById("output")

input.addEventListener("keyup", function () {
    output.innerText = input.value
})

let btn = document.getElementById("dark")

btn.addEventListener("click", function () {
    document.body.classList.toggle("black")
})