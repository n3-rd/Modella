import './style.css'
import { gsap } from 'gsap';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import Lenis from '@studio-freight/lenis'
import imagesLoaded from 'imagesloaded';
// new kursor({
//   type: 1
// })

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
  direction: 'vertical',
})

function raf() {
  lenis.raf()
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

Splitting();

const tl = gsap.timeline();

const preload = ()=>{
  tl.to(".preloader-loader__inner",{
    duration: 3,
    delay: 1,
    width: '100%'
  })
  .to(".preloader-content", {
    duration:2,
    opacity: 0,
  })
  .to(".preloader",{
    duration: 1.4,
    y: "-100vh"
  })
}

const mainReveal = ()=>{
  tl.from(".main-shape__inner",{
    duration: 1,
    // scale:2,
    ease: "power4.out"
  })
  .from(".main-text__inner .word",{
    duration: 1.8,
    y: 200,
    ease: "power4.out",
    // delay: 1,
    skewY: 20,
    stagger: {
      amount: 1
    }
  })
}

const preloadBody = ()=>{
  document.body.style.opacity = 1;
}
// document.body.style.opacity = 0;
imagesLoaded( document.querySelector('body'), function( instance ) {
  console.log('all images are loaded');
    preloadBody()
    preload()
    mainReveal();
  })


// const extLink = document.querySelectorAll('.ext-link');
// extLink.forEach(link => {
//   link.innerHTML = `
//   <svg width="32" height="32" viewBox="0 0 48 48"><path fill="#ffffff" d="M22.25 6a1.25 1.25 0 1 0 0 2.5h15.482L6.366 39.866a1.25 1.25 0 0 0 1.768 1.768L39.5 10.268V25.75a1.25 1.25 0 1 0 2.5 0V7.25C42 6.56 41.44 6 40.75 6h-18.5Z"/></svg>
//   `
// })