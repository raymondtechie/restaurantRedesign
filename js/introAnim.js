const tl = gsap.timeline({defaults: {ease: "power1.out"} });

tl.to(".hide-text", {y: "0%", duration: 1, stagger: 0.40});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y: "-100%", duration: 1}, "-=1");
tl.fromTo('h2', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('h3', {opacity: 0}, {opacity: 1, duration: 1.4});
tl.fromTo('.box', {opacity: 0}, {opacity: 1, duration: 1.4});