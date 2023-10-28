const iconoMenu = document.querySelector(".navNueva");
const menu = document.querySelector(".menuSmall");
const bodyBg = document.querySelector("#mobile-body-overly");
const body = document.querySelector("body");
const iconoMenu2 = document.querySelector("#icono-menu2");
const iconBars = document.querySelector(".bars");
const menuFloat2 = document.querySelector("#menuFloat");
const arrowUp = document.querySelector(".arrow-up2");
const porfolio = document.querySelectorAll(".porfolio div[id ^='#']");

porfolio.forEach((item) => {
  item.addEventListener("click", (e) => {
    let capa = e.target.nextElementSibling;
    let seeMore = e.target;
    let button = capa.lastElementChild.firstElementChild;

    if (seeMore) {
      seeMore.classList.toggle("seeMoreDisable");
      capa.classList.toggle("cardShadowActive");
    }

    if (capa.classList.contains("cardShadowActive")) {
      button.addEventListener("click", () => {
        capa.classList.remove("cardShadowActive");
        seeMore.classList.remove("seeMoreDisable");
      });
    } else {
      capa.classList.add("cardShadowActive");
    }
  });
});

function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScroll() {
  window.onscroll = null;
}

iconBars.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  iconBars.classList.toggle("fa-close");

  if (e.target.contains != "bg" && menu.classList.contains("active")) {
    bodyBg.classList.add("bg");
    body.classList.toggle("bodyActive");

    disableScroll();
  } else {
    bodyBg.classList.remove("bg");
    enableScroll();
  }
});

const menuLinks = document.querySelectorAll(".menu a[href ^='#']");
const menuLinksFloat = document.querySelectorAll(".menuFloat a[href ^='#']");

const oberver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLinks = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        menuLinks.classList.add("selectedFloat");
      } else {
        enableScroll();
        menuLinks.classList.remove("selectedFloat");

        menu.classList.remove("active");
        iconBars.classList.remove("fa-close");
        bodyBg.classList.remove("bg");
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);

menuLinks.forEach((menuLinks) => {
  menuLinks.addEventListener("click", function () {
    menu.classList.remove("active");
  });

  const hash = menuLinks.getAttribute("href");
  const target = document.querySelector(hash);

  const menu = document.querySelector(".menuSmall");

  if (target) {
    oberver.observe(target);
  }
});

window.addEventListener("scroll", menuOpen);

function menuOpen() {
  const element = document.querySelector(".menuSmall");
  let activo = element.classList.contains("active");

  if (window.scrollY < 500 && activo) {
    menu.classList.remove("active");
  }

  if (window.scrollY > 500) {
    iconoMenu.style.display = "block";
  } else {
    iconoMenu.style.display = "none";
  }
}

document.body.addEventListener("click", cerraMenu);

function cerraMenu(e) {
  const menu = document.querySelector(".menuSmall");

  if (e.target.id != "menubars" && e.target.id != "iconoBars") {
    menu.classList.remove("active");
    bodyBg.classList.remove("bg");
    iconBars.classList.remove("fa-close");
    enableScroll();
  }
}

let mobile = window.matchMedia("screen and (max-device-width: 375px)");

let resizeReset = function () {
  w = canvasBody.width = window.innerWidth;
  h = canvasBody.height = window.innerHeight;
};
let opts;

if (mobile.matches) {
  opts = {
    particleColor: "#white",
    lineColor: "rgb(200,200,200)",
    particleAmount: 90,
    defaultSpeed: 0.1,
    variantSpeed: 0.1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 160,
  };
} else {
  opts = {
    particleColor: "#white",
    lineColor: "rgb(200,200,200)",
    particleAmount: 250,
    defaultSpeed: 0.1,
    variantSpeed: 0.1,
    defaultRadius: 2,
    variantRadius: 2,
    linkRadius: 160,
  };
}

window.addEventListener("resize", function () {
  deBouncer();
});

let deBouncer = function () {
  clearTimeout(tid);
  tid = setTimeout(function () {
    resizeReset();
  }, delay);
};

let checkDistance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function (point1, hubs) {
  for (let i = 0; i < hubs.length; i++) {
    let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
    let opacity = 1 - distance / opts.linkRadius;
    if (opacity > 0) {
      drawArea.lineWidth = 0.5;
      drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
      drawArea.beginPath();
      drawArea.moveTo(point1.x, point1.y);
      drawArea.lineTo(hubs[i].x, hubs[i].y);
      drawArea.closePath();
      drawArea.stroke();
    }
  }
};

Particle = function (xPos, yPos) {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
  this.directionAngle = Math.floor(Math.random() * 360);
  this.color = opts.particleColor;
  this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
  this.vector = {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed,
  };
  this.update = function () {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  };
  this.border = function () {
    if (this.x >= w || this.x <= 0) {
      this.vector.x *= -1;
    }
    if (this.y >= h || this.y <= 0) {
      this.vector.y *= -1;
    }
    if (this.x > w) this.x = w;
    if (this.y > h) this.y = h;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  };
  this.draw = function () {
    drawArea.beginPath();
    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    drawArea.closePath();
    drawArea.fillStyle = this.color;
    drawArea.fill();
  };
};

function setup() {
  particles = [];
  resizeReset();
  for (let i = 0; i < opts.particleAmount; i++) {
    particles.push(new Particle());
  }
  window.requestAnimationFrame(loop);
}

function loop() {
  window.requestAnimationFrame(loop);
  drawArea.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
}

const canvasBody = document.getElementById("canvas"),
  drawArea = canvasBody.getContext("2d");
let delay = 200,
  tid,
  rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();