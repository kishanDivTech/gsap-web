// gsap.to("#box-box", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     repeat: -1,
//     rotate: 360,
//     yoyo: true

// })
// gsap.to("#box", {
//     x: 1000,
//     duration: 4,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     backgroundColor: "red",
// })
// gsap.from("#box1", {
//     x: 1000,
//     duration: 5,
//     delay: 1,
//     rotate: 360,
//     borderRadius: "50%",
//     backgroundColor: "red",
// })

// gsap.from("h1", {
//     opacity: 0,
//     y: 30,
//     color: "red",
//     duration: 2,
//     delay: 1,
//     stagger: 2
// })

gsap.to("#box1", {
    x: 1000,
    duration: 1.5,
    delay: 1,
    rotate: 360
})

gsap.to("#box2", {
    x: 1200,
    backgroundColor: "yellow",
    duration: 1.5,
    delay: 2.5
})

gsap.to("#box3", {
    x: 1400,
    scale: 0.5,
    duration: 1.5,
    delay: 4,
    borderRadius: "50%"
})

var tm = gsap.timeline()


tm.from("h2", {
    y: -30,
    duration: 1.5,
    opacity: 0,
    delay: 0.5
})

tm.from("h1", {
    y: -30,
    duration: 1.5,
    opacity: 0,
})
