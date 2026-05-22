// gsap.from("#page1 #box", {
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     // scrollTrigger: "#page1 #box"
//     scrollTrigger: {
//         trigger: "#page1 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 20%",
//         scrub: 5,
//         // pin: true

//     }
// })
// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     // scrollTrigger: "#page2 #box"
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 20%",
//         scrub: 5,
//         // pin: true

//     }
// })
// gsap.from("#page3 #box", {
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     // scrollTrigger: "#page3 #box"
//     scrollTrigger: {
//         trigger: "#page3",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 20%",
//         scrub: 5,
//         // pin: true

//     }
// })


// gsap.from("#page1 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     // scrollTrigger: "#page1 #box"
//     scrollTrigger: {
//         trigger: "#page1 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     // scrollTrigger: "#page2 #box"
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })
// gsap.from("#page3 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     // scrollTrigger: "#page3 #box"
//     scrollTrigger: {
//         trigger: "#page3 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%"
//     }
// })


// gsap.from("#page2 h1", {
//     opacity: 0,
//     x: 500,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 5,
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     x: -500,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 5
//     }
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub: 2,
//         // pin: true
//     }
// })

gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        // end: "top 20%",
        markers: true,
        scrub: 2,
        pin: true,

    }
})