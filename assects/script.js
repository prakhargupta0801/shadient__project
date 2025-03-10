// -------Navbar on Scroll bg Color Chnage

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.getElementById("navbar");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.backgroundColor = "#0F0F0F66";
    navbar.style.backdropFilter = "blur(18px)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "none"; 
  }
} 
 
// open nav ==================
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});


function infiniteScroll(target, direction) {
  let container = document.querySelector(target);
  let duration = 120;

  gsap.to(container, {
    x: direction === "left" ? "-50%" : "50%",
    duration: duration,
    ease: "linear",
    repeat: -1,
  });
}

infiniteScroll(".logo-container-1", "left");
infiniteScroll(".logo-container-2", "right");


gsap.from(".animated-h1", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".animated-h1 span", {
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "sine.out",
});

gsap.from(".top_animation", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".top_animation",
    start: "top 60%",
    toggleActions: "play none none none",
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".page-2-animation-left1", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-2-animation-left1",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-2-animation-left2", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-2-animation-left2",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-2-animation-right1", {
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-2-animation-right1",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-2-animation-right2", {
  x: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-2-animation-right2",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-3-animation", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".page-3-animation",
    start: "top 60%",
    toggleActions: "play none none none",
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".page-3-image-section img", {
  x: -100,
  opacity: 0,
  rotate: -5,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-3-image-section img",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-3-image-section h2", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-3-image-section h2",
    start: "top 75%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-3-image-section p", {
  opacity: 0,
  duration: 1.2,
  delay: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-3-image-section p",
    start: "top 75%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-3-image-section button", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-3-image-section button",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

gsap.to(".mirror-flip", {
  scale: 0.4,
  duration: 2,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});


gsap.registerPlugin(Flip);

let layouts = ["final", "plain", "columns", "grid"],
		container = document.querySelector(".container-flip"),
		curLayout = 0; 

function nextState() {
  const state = Flip.getState(".letter, .for, .gsap", {props: "color,backgroundColor", simple: true});
  
  container.classList.remove(layouts[curLayout]); 
  curLayout = (curLayout + 1) % layouts.length;   
  container.classList.add(layouts[curLayout]);    

  Flip.from(state, { 
    absolute: true,
    stagger: 0.07,
    duration: 0.7,
    ease: "power2.inOut",
    spin: curLayout === 0,
    simple: true,
    onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
    onLeave: elements => gsap.to(elements, {opacity: 0})
  });

  gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
}

gsap.delayedCall(1, nextState);

gsap.registerPlugin(ScrollTrigger);

gsap.from(".page-5-animation-left", {
  x: -200,
  opacity: 0,
  duration: 3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-5-animation-left",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.from(".page-5-animation-right", {
  x: 200,
  opacity: 0,
  duration: 3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".page-5-animation-right",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text-slider');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});


gsap.from(".logoo", {
  x: -100,
  opacity: 0,
  duration: 3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".logoo",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});

gsap.from(".heading", {
  x: 500,
  opacity: 0,
  duration: 3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".heading",
    start: "top 90%",
    toggleActions: "play none none none",
  },
});
