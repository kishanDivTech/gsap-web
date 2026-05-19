// gsap.to("#box", {
//     backgroundColor: "blue",
//     x: 1000,
//     duration: 1.5,
//     delay: 1,
//     rotate: 150,
//     yoyo: 1,
//     repeat: -1,
//     borderRadius: "50%",

// })

// gsap.from("#box1", {
//     backgroundColor: "green",
//     x: 900,
//     duration: 1.5,
//     delay: 2.5,
//     rotate: 150,
//     borderRadius: "50%",
//     yoyo: 1,
//     repeat: -1
// })

// gsap.to('#box2', {
//     backgroundColor: "yellow",
//     x: 800,
//     duration: 1.5,
//     delay: 4,
//     rotate: 150,
//     borderRadius: "50%",
//     yoyo: 1,
//     repeat: -1
// })

// gsap.from("#box3", {
//     backgroundColor: "crimson",
//     x: 700,
//     duration: 1.5,
//     delay: 5.5,
//     rotate: 150,
//     borderRadius: "50%",
//     yoyo: 1,
//     repeat: -1
// })

// gsap.from("h1", {
//     // color: "red",
//     duration: 1,
//     delay: 1,
//     opacity: 0,
//     stagger: 0.5,
//     y: 30
// })



// gsap.to("#box1", {
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360
// })

// gsap.to("#box2", {
//     x: 1000,
//     duration: 1.5,
//     delay: 2.5,
//     rotate: 360
// })

// gsap.to("#box3", {
//     x: 800,
//     duration: 1.5,
//     delay: 4,
//     rotate: 360
// })

// var tl = gsap.timeline()
// tl.to("#box1", {
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
// })
// tl.to("#box2", {
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
// })
// tl.to("#box3", {
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
// })

const timeValue = gsap.timeline()

timeValue.from("h1", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.5
})

timeValue.from("h2", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})

timeValue.from("h3", {
    y: -30,
    duration: 0.5,
    opacity: 0,
    scale: 0.5
})