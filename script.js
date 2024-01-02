// cursor

function cursor() {
  const cursor = document.querySelector(".cursor");
  const body = document.querySelector("body");

  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
}
cursor();

// Section1 Animation

function section1() {
  let tl = gsap.timeline();
  tl.from(".header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
  tl.from(".text_content h1,.text_content h2,.text_content p", {
    y: 100,
    opacity: 0,
    duration: 0.8,
  });
}
section1();

// Section 2 Cursor
function section2() {
  let sectiontwo = document.querySelector(".section2");
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  sectiontwo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: "<i class='fa-solid fa-volume-high'></i>",
      fontSize: "25px",
      color: "black",
      margin: "20px",
      background: "white",
    });
  });
  sectiontwo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      height: "20px",
      width: "20px",
      innerHTML: "",
      margin: "0px",
    });
  });
}

section2();

// Section 3
function section3() {
  let sectionthree = document.querySelector(".section3");
  let cursor = document.querySelector(".cursor");

  sectionthree.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "black",
    });
  });
  gsap.to(sectionthree, {
    background: "#fff",
    color: "black",
    scrollTrigger: {
      trigger: ".section3",
      start: "top center",
      end: "top center",
      scrub: 1,
    },
  });
}
section3();

// Section 4

function section4() {
  let sectionfour = document.querySelector(".section4");
  let cursor = document.querySelector(".cursor");

  gsap.to(sectionfour, {
    background: "black",
    color: "white",
    scrollTrigger: {
      trigger: ".section4 .moving_text",
      start: "bottom center",
      end: "bottom center",
      scrub: 2,
    },
  });
}
section4();

// projects

let parentEl = document.querySelector(".bg");
let childEl = document.querySelectorAll(".project_first .first");
let project_first = document.querySelector(".project_first");

childEl.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    let ids = item.getAttribute("data-id");
    let bgEl = document.querySelector(`.id_${ids}`);
    const cursor = document.querySelector(".cursor");

    parentEl.querySelectorAll("video").forEach((video) => {
      video.style.display = "none";
    });

    bgEl.style.display = "block";
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: "<p>See Projects</p>",
      duration: 0.3,
    });
  });
});

childEl.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    let ids = item.getAttribute("data-id");
    let bgEl = document.querySelector(`.id_${ids}`);
    const cursor = document.querySelector(".cursor");

    parentEl.querySelectorAll("video").forEach((video) => {
      video.style.display = "none";
    });

    bgEl.style.display = "none";
    gsap.to(cursor, {
      height: "20px",
      width: "20px",
      innerHTML: "",
    });
  });
});
const cursor1 = document.querySelector(".cursor");
project_first.addEventListener("mouseenter", () => {
  gsap.to(cursor1, {
    background: "white",
    duration: 0.1,
  });
});
project_first.addEventListener("mouseleave", () => {
  gsap.to(cursor1, {
    background: "black",
    duration: 0.1,
  });
});

// Section 5
function section5() {
  let sectionfive = document.querySelector(".section5");
  let cursor = document.querySelector(".cursor");

  sectionfive.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "black",
      duration: 0.1,
    });
  });
  gsap.to(sectionfive, {
    background: "#fff",
    color: "black",
    scrollTrigger: {
      trigger: ".section5",
      start: "top center",
      end: "top center",
      scrub: 1,
    },
  });
  gsap.from(".section5 .left h2, .section5 .left p", {
    y: 100,
    opacity: 0,
    stagger: 1,
    duration: 3,
    scrollTrigger: {
      trigger: ".section5 .left",
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}
section5();
