var circle=document.querySelector("#scroll")
document.addEventListener("mousemove", (dets) => {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.4,   
   
  });
});

var blur=document.querySelector("#blur")
document.addEventListener("mousemove", (dets) => {
  gsap.to(blur, {
    x: dets.x-200,
    y: dets.y-200,
    duration: 0.5,  
    scrub:5, 
   
  });
});

document.addEventListener("mouseleave", () => {
  circle.style.display = "none";
});
gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})

