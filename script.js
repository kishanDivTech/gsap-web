const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
})

function VideoConAnimation() {
    const videoCon = document.querySelector("#video-container")
    var playBtn = document.querySelector("#play")
    videoCon.addEventListener("mouseenter", function () {
        // alert("hii")
        // playBtn.style.opacity = 1
        // playBtn.style.scale = 1
        gsap.to(playBtn, {
            opacity: 1,
            scale: 1
        })
    })

    videoCon.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            opacity: 0,
            scale: 0
        })
    })

    videoCon.addEventListener("mousemove", function (dets) {
        gsap.to(playBtn, {
            left: dets.x - 50,
            top: dets.y - 80
        })
    })
}
VideoConAnimation()

function textLoading() {
    gsap.from("h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.3
    })

    gsap.from("#page1 #video-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5
    })

}
textLoading()

document.addEventListener('mousemove', function (dets) {
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
        // scale: 1
    })
})

// document.querySelector("#child1").addEventListener("mouseenter", function () {
//     gsap.to("#cursor", {
//         transform: 'translate(-50%, -50%) scale(1)'

//     })
// })
// document.querySelector("#child1").addEventListener("mouseleave", function () {
//     gsap.to("#cursor", {
//         transform: 'translate(-50%, -50%) scale(0)'

//     })
// })


var a = document.querySelectorAll(".child")
a.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(1)'

        })
    })
    elem.addEventListener("mouseleave", function () {
        gsap.to("#cursor", {
            transform: 'translate(-50%, -50%) scale(0)'

        })
    })
})