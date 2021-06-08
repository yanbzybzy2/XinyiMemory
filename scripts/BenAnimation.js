import { gsap } from "./gsap/index.js";
import { ScrollTrigger } from "./gsap/ScrollTrigger.js";

console.log("Hello World JS");

gsap.registerPlugin(ScrollTrigger);

/*
window.BenAnimation = () => {
    gsap.to("#img1", {
        scrollTrigger: {
            trigger: "#img1",
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "bottom bottom", // end after scrolling 500px beyond the start
            scrub: true,
            markers: true
        },
        duration: 10,
        x: 100
    });



}
*/

// Adding gsap for dev console debug
window.gsap = gsap;