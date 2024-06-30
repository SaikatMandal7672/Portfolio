gsap.registerPlugin(ScrollTrigger);
const textTransform = () => {
  var reveal = document.querySelectorAll(".reveal");

  reveal.forEach((elem) => {
    //create spans
    let p = document.createElement("span");
    let c = document.createElement("span");
    //assigning class names
    p.className = "parent";
    c.className = "child";
    c.innerHTML = elem.innerHTML; //set the text of the child element
    p.appendChild(c); //append the child inside of parent

    //each element must be replaced by the parent span
    elem.innerHTML = "";
    elem.appendChild(p);
  });
};

let tl = gsap.timeline();

const introAnimation = () => {
  tl.to(".center-text", {
    opacity: 1,
  })
    .from(".intro .parent .child span", {
      duration: 1,
      opacity: 0.5,
      x: 200,
      y: 200,
      stagger: 0.1,
      ease: Circ.easeInOut,
    })

    .to(".intro .parent .child", {
      duration: 2,
      y: "-1150%",
      ease: Circ.easeInOut,
    })

    .to(".loader .container , .container span ", {
      opacity: 0,
      height: 0,
      width: 0,
      duration: 0.5,
      delay: -2,
    })

    .to(".intro", {
      height: 0,
      delay: -1,
      duration: 1,
      ease: Power4.Out,
    })

    .to(".transition-screen", {
      height: "100vh",
      duration: 1,
      delay: -1,
      ease: Power4.Out,
    })

    .to(".transition-screen", {
      bottom: "675vh",
      duration: 1,
      delay: -0.8,
      ease: Power4.Out,
    });
};
const heroAnimation = () => {
  tl.delay(0);
  tl.from(".hero .fd .parent .child", {
    duration: 2,
    delay: -1,
    y: "250%",
    ease: Circ.easeInOut,
    stagger: 0.3,
  })
    .to(".intro", {
      height: 0,
      delay: -1,
      duration: 1.2,
      ease: Expo.inOut,
    })
    .from(".hero p .parent .child", {
      duration: 2,
      delay: -1,
      y: "250%",
      ease: Circ.easeInOut,
      stagger: 0.3,
    });
};
const webtext = () => {
  gsap.set("g", {
    autoAlpha: 1,
  });
  gsap.to("svg", {
    scale: 1.2,
    duration: 1,
  });
  tl.from(".st0", {
    yPercent: 130,
    stagger: 0.1,
    scaleY: 0.5,
    skewX: 30,
    skewY: 60,
    opacity: 0,
    duration: 0.359,
    delay: -2,
  });
};
const aboutMeAnimation = () => {
  tl.to("section .right-imgs", {
    opacity: 1,
    y: -50,
    duration: 1,
    delay: -1,
    ease: Power4.inOut,
  });
};

const timeFunction = () => {
  setInterval(() => {
    let hrs = document.querySelector(".hrs");
    let min = document.querySelector(".min");
    let sec = document.querySelector(".sec");
    let currentTime = new Date();

    hrs.textContent = currentTime.getHours();
    min.textContent = currentTime.getMinutes();
    sec.textContent = currentTime.getSeconds();
  }, 1000);
};

function cardHoverEffect() {
  document.querySelectorAll(".cnt").forEach(function (cnt) {
    let vis;
    console.log(cnt);
      cnt.addEventListener("mousemove", function (dets) {
        vis = dets.target;
        let idx = dets.target.dataset.index;
        document.querySelector("#cursor").children[idx].style.opacity = 1;
        document.querySelector("#cursor").children[
          idx
        ].style.transform = `translate(calc(${dets.clientX - 8}px),${
          dets.clientY - 20
        }px)`;

        document.querySelector(".skill-set").style.backgroundColor =
          dets.target.dataset.color;
        document.querySelector(".projects").style.backgroundColor =
          dets.target.dataset.color;
      });
    

    cnt.addEventListener("mouseleave", function (dets) {
      let idx = vis.dataset.index;
      document.querySelector("#cursor").children[idx].style.opacity = 0;
      document.querySelector(".skill-set").style.backgroundColor = "#f2f2f2";
      document.querySelector(".projects").style.backgroundColor = "#f2f2f2";
    });
  });
}

cardHoverEffect();
tl.delay(1);
textTransform();
introAnimation();
heroAnimation();
timeFunction();
webtext();
aboutMeAnimation();

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
