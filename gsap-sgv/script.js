let finalPath = `M 10 100 Q 750 100 1490 100`;


var str = document.querySelector("#string")
str.addEventListener("mouseenter", function (dets) {
    console.log("entered")
    console.log(dets)
    let path = `M 10 100 Q ${dets.x} ${dets.y} 1490 100`;
    gsap.to("svg path", {
        attr: {
            d: path,
        },
        duration: 0.3,
        ease: "power3.out"
    })
})

str.addEventListener("mouseleave", function (dets) {
    console.log("leave")

    gsap.to("svg path", {
        attr: {
            d: finleyPath,
        }
        , duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})