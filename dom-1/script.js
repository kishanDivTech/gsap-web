// let h1 = document.createElement("h1")
// h1.innerText = "New Heading Add"

// document.body.appendChild(h1)


// let title = document.getElementById("title")
// title.remove()



// document.addEventListener("mousemove", function (dets) {
//     document.getElementById("box").style.left = dets.x + "px"

//     document.getElementById("box").style.top = dets.y + "px"
// })

// document.addEventListener("keydown", function (e) {
//     console.log(e.key)
// })


// document.getElementById("mode").addEventListener("click", function () {
//     document.body.classList.toggle("dark")
// })


// // document.getElementById("img").src = '4.jpg'


// document.getElementById("show").addEventListener("click", function () {
//     let val = document.getElementById("inp").value;
//     console.log(val)
// })


document.getElementById("add")
    .addEventListener("click", function () {

        let val = document.getElementById("inp").value;

        let li = document.createElement("li");

        li.innerText = val;

        document.getElementById("list")
            .appendChild(li);

    });

document.getElementById("parent").addEventListener("click", function () {
    console.log("parent")
})

document.getElementById("child").addEventListener("click", function (e) {
    console.log("ch")
    console.log(e.target)
})

let img = document.getElementsByTagName("img")[0]
img.setAttribute("width", "300px")
img.setAttribute("height", "300px")
console.log(img.getAttribute("src"))