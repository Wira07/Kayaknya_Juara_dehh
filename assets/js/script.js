// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// About Tabs
const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// Popup Sikuku
var sikuku = document.querySelector("#sikuku");
var btnSikuku = document.querySelector("#btnSikuku");
var closeSikuku = document.querySelector("#close-sikuku");

btnSikuku.onclick = function() {
  sikuku.style.display = "block";
  sikuku.style.opacity = 1;
}

closeSikuku.onclick = function() {
  sikuku.style.display = "none";
  sikuku.style.opacity = 0;
}

window.onclick = function(event) {
  if (event.target == sikuku) {
    sikuku.style.display = "none";
    sikuku.style.opacity = 0;
  }
}

// Popup Sipedes
var sipedes = document.querySelector("#sipedes");
var btnSipedes = document.querySelector("#btnSipedes");
var closeSipedes = document.querySelector("#close-sipedes");

btnSipedes.onclick = function() {
  sipedes.style.display = "block";
  sipedes.style.opacity = 1;
}

closeSipedes.onclick = function() {
  sipedes.style.display = "none";
  sipedes.style.opacity = 0;
}

window.onclick = function(event) {
  if (event.target == sipedes) {
    sipedes.style.display = "none";
    sipedes.style.opacity = 0;
  }
}

// Popup Cagak
var cagak = document.querySelector("#cagak");
var btnCagak = document.querySelector("#btnCagak");
var closeCagak = document.querySelector("#close-cagak");

btnCagak.onclick = function() {
  cagak.style.display = "block";
  cagak.style.opacity = 1;
}

closeCagak.onclick = function() {
  cagak.style.display = "none";
  cagak.style.opacity = 0;
}

window.onclick = function(event) {
  if (event.target == cagak) {
    cagak.style.display = "none";
    cagak.style.opacity = 0;
  }
}

// Popup Pemdes Ciuyah
var pemdesCiuyah = document.querySelector("#pemdes-ciuyah");
var btnPemdes = document.querySelector("#btnPemdes");
var closePemdes = document.querySelector("#close-pemdes");

btnPemdes.onclick = function() {
  pemdesCiuyah.style.display = "block";
  pemdesCiuyah.style.opacity = 1;
}

closePemdes.onclick = function() {
  pemdesCiuyah.style.display = "none";
  pemdesCiuyah.style.opacity = 0;
}

window.onclick = function(event) {
  if (event.target == pemdesCiuyah) {
    pemdesCiuyah.style.display = "none";
    pemdesCiuyah.style.opacity = 0;
  }
}