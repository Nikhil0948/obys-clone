function loadingAnimation(){
    let tl = gsap.timeline()

tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5
})

tl.from(".line1-part1", {
    opacity: 0,
    onStart: function(){

        var numberTimer = document.querySelector(".line1-part1 h5")
        var timer = 0;
        setInterval(()=>{
            if(timer < 100){
                numberTimer.textContent = timer++;
            }
            else{
                numberTimer.textContent = timer;
            }
        }, 35)
    }
})

tl.to(".line h2", {
    animationName: "animateNow",
    opacity: 1
})

tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3.5
})

tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4
})
tl.to("#loader", {
    display: "none"
})  
tl.from("#nav", {
    delay: .4,
    opacity: 0
})
tl.from(".hero h1, .hero h2, .hero h3", {
    y: 120,
    stagger: .2
})
}
loadingAnimation();

function cursorAnimation(){
    document.addEventListener("mousemove", (e)=>{
        gsap.to(".crsr", {
            left: e.x,
            top: e.y
        }) 
    })

    Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation();