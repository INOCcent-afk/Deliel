// *********

function init() {
  new SmoothScroll(document, 80, 12);
}

function SmoothScroll(target, speed, smooth) {
  if (target === document)
    target =
      document.scrollingElement ||
      document.documentElement ||
      document.body.parentNode ||
      document.body;

  var moving = false;
  var pos = target.scrollTop;
  var frame =
    target === document.body && document.documentElement
      ? document.documentElement
      : target;

  target.addEventListener("mousewheel", scrolled, { passive: false });
  target.addEventListener("DOMMouseScroll", scrolled, { passive: false });

  function scrolled(e) {
    e.preventDefault();

    var delta = normalizeWheelDelta(e);

    pos += -delta * speed;
    pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight));

    if (!moving) update();
  }

  function normalizeWheelDelta(e) {
    if (e.detail) {
      if (e.wheelDelta)
        return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
      else return -e.detail / 3;
    } else return e.wheelDelta / 120;
  }

  function update() {
    moving = true;

    var delta = (pos - target.scrollTop) / smooth;

    target.scrollTop += delta;

    if (Math.abs(delta) > 0.5) requestFrame(update);
    else moving = false;
  }

  var requestFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (func) {
        window.setTimeout(func, 1000 / 50);
      }
    );
  })();
}

const menu = document.querySelector(".menu");
const dropMenu = document.querySelector(".dropdown");
const dropDownUl = document.querySelector(".dropdown-container");
const closeHeight = document.querySelectorAll("li");

menu.addEventListener("click", function menumenu() {
  dropMenu.classList.toggle("class");
  dropDownUl.classList.toggle("boom");
  pageContainer.classList.toggle("nopointer");
});

closeHeight.forEach((ch) => {
  ch.addEventListener("click", () => {
    dropMenu.classList.remove("class");
    dropDownUl.classList.remove("boom");
  });
});

// slider
var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// *********

VanillaTilt.init(document.querySelector(".your-element"), {
  max: 25,
  speed: 400,
});

VanillaTilt.init(document.querySelectorAll(".your-element"));

// *********

window.addEventListener("load", animations);

function animations() {
  let windowWidth = window.innerWidth;

  if (windowWidth >= 800) {
    const tl = new TimelineLite();

    tl.to(".first-hero-img", 2, {
      transform: "scale(10)",
      ease: Power2.easeOut,
    });

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      triggerElement: ".page-container",
      duration: 4000,
      triggerHook: 0,
    })
      .setTween(tl)
      .addTo(controller);

    // ***********

    const tl2 = new TimelineLite();

    tl2.to(".text", 1, {
      left: "30%",
      ease: Power2.easeOut,
    });

    const controller2 = new ScrollMagic.Controller();

    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".second-hero",
      duration: 2000,
      triggerHook: 0.5,
    })

      .setTween(tl2)
      .addTo(controller2);

    // ***********
    const tl3 = new TimelineLite();

    tl3.to(".quote1", 2, {
      transform: "translateX(-50%)",
      ease: Power4.easeOut,
    });
    const controller3 = new ScrollMagic.Controller();

    const scene3 = new ScrollMagic.Scene({
      triggerElement: ".quotes-container",
      duration: 1000,
      triggerHook: 0.5,
    })
      .setTween(tl3)
      .addTo(controller3);
    // ***********
    const tl4 = new TimelineLite();

    tl4.to(".quote2", 2, {
      transform: "translateX(-10%)",
      ease: Power4.easeOut,
    });

    const controller4 = new ScrollMagic.Controller();

    const scene4 = new ScrollMagic.Scene({
      triggerElement: ".quotes-container",
      duration: 1000,
      triggerHook: 0.5,
    })
      .setTween(tl4)
      .addTo(controller4);
    // ***********
    const tl5 = new TimelineLite();

    tl5.to(".quote3", 2, {
      transform: "translateX(-50%)",
      ease: Power4.easeOut,
    });

    const controller5 = new ScrollMagic.Controller();

    const scene5 = new ScrollMagic.Scene({
      triggerElement: ".quotes-container",
      duration: 1000,
      triggerHook: 0.5,
    })
      .setTween(tl5)
      .addTo(controller5);

    // *******************
    const tl6 = new TimelineLite();

    tl6.to(".slogan-border", 1, {
      width: "100%",
      ease: Power4.easeOut,
    });

    const controller6 = new ScrollMagic.Controller();

    const scene6 = new ScrollMagic.Scene({
      triggerElement: ".slogan-container",
      duration: 2000,
      triggerHook: 0.5,
    })
      .setTween(tl6)
      .addTo(controller6);
  }
}
// *******************

const preLoader = document.querySelector(".preloader-container");
const pageContainer = document.querySelector(".page-container");

window.addEventListener("load", enableScroll);

function enableScroll() {
  setTimeout(function () {
    pageContainer.style.overflowY = "initial";
  }, 6000);
}

// ****************
function pageTransition() {
  const tl = gsap.timeline();

  tl.to(".first-page-transition-animation", {
    duration: 1,
    transformOrigin: "right",
    scaleX: 1,
  });
  tl.to(".first-page-transition-animation", {
    duration: 1,
    transformOrigin: "right",
    scaleX: 0,
  });
}

function contentAnimation() {
  const tl = gsap.timeline();
  tl.from(".bizzare", { duration: 1.5, translateY: 50, opacity: 0 });
  tl.to(".bizzare", { duration: 1.5, translateY: 0, opacity: 1 });
}

function contacts() {
  const contactBtn = document.querySelector(".contact-frontPage-button");
  const contactForm = document.querySelector(".contact-form");
  const contactBtnClose = document.querySelector(".contact-form-closeBtn");

  contactBtn.addEventListener("click", () => {
    contactForm.style.transform = "translateX(0%)";
    console.log("working");
  });

  contactBtnClose.addEventListener("click", () => {
    contactForm.style.transform = "translateX(-100%)";
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1000);

        done();
      },
      async enter(data) {
        let from = data.next.url.path;

        if (from === "/Deliel/contact.html") {
          contacts();
          contentAnimation();
        } else {
          contentAnimation();
        }
      },

      async once(data) {
        let from = data.next.url.path;

        if (from === "/Deliel/contact.html") {
          contacts();

          contentAnimation();
        } else {
          contentAnimation();
        }
      },
    },
  ],
});

// ****************
