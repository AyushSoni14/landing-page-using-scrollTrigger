var tl=gsap.timeline();
tl.from(".nav",{
    opacity:0,
    y:50,
    duration:0.5,
   opasity:0,
   delay:0.5
})
tl.from(".section1,.section2 a,.section3",{
    y:-200,
    duration:0.5,
    stagger:0.2
})
tl.from(".left h1",{
    x:-200,
opacity:0,
duration:1,
stagger:0.5
})
tl.from(".img",{
 scale:0.5,
    opacity:0,
    duration:1,
})
tl.from(".box", {
    scale: 0.5,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body"
    }
});
