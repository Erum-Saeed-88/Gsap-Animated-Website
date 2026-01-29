const tl = gsap.timeline(
  {defaults: {
    ease: "power2.inOut"
  }}
) ;

tl.fromTo(".circleShape",
  { drawSVG: "0% 0%" },
  { drawSVG: "0% 100%", duration: 1 , ease:"none"}
);
tl.to(".circleShape" , {
   fillOpacity: 1,
   ease: "sine.inOut",
})
tl.fromTo(
  ".main-graph",
  { opacity: 0, x:"100%" },
  {
    opacity: 1,
    x:"10%" ,
  }
);
tl.fromTo(
  ".small-graph-group",
  { opacity: 0, x:"100%" },
  {
    opacity: 1,
    x:0 ,
    ease: "none"
  }
);
tl.from(".icon-hug" , {
opacity: 0 ,
x: "50px",
});
tl.from(".icon-clap" , {
opacity: 0 ,
x: "50px",
});
tl.from(".icon-hash" , {
opacity: 0 ,
y: "50px" ,

}) ;

tl.totalDuration(2);

const decorTl = gsap.timeline() ;

decorTl.fromTo(".decoration" , {
opacity: 0 ,
y: 100  ,
} , {
opacity:1  ,
y: 0 
})

const master = gsap.timeline();
master
  .add(tl)
  .add(decorTl);
  
// home section animation ends

gsap.registerPlugin(ScrollTrigger);

gsap.from(".feature .card", {
  y: -50,
  scrollTrigger: {
    trigger: ".feature",
    start: "top 10%",
    end: "center 30%",
    scrub: true,
    // markers: true
  }
});

gsap.from(".testimonials .test-card", {
  y: 20,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 50%",
    end: "center 30%",
    scrub: true,
    // markers: true
  }
});