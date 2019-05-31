let topnav = document.getElementById("topnav");
function toggle() {
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav";
  }
}
window.onscroll = function() {
  myFunction();
};
let topnavContainer = topnav.parentNode.parentNode;
let sticky = topnavContainer.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    topnavContainer.classList.add("sticky");
  } else {
    topnavContainer.classList.remove("sticky");
  }
}
// let articleImages = document.querySelectorAll(".article .expected-ratio img");
// let bg = document.getElementById("bg");
// console.log(bg);
// for (let img of articleImages) {
//   console.log(img);
//   img.addEventListener("mouseenter", () => {
//     let url =
//       "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('" +
//       img.src +
//       "')";
//     bg.style.backgroundImage = url;
//     bg.classList.add("bg");
//   });
//   img.addEventListener("mouseleave", () => {
//     bg.style.backgroundImage = "none";
//     bg.classList.remove("bg");
//   });
// }

let bgs = [
  {
    url: "../img/mountain.jpg",
    name: "mountain"
  },
  {
    url: "../img/cave.jpg",
    name: "cave"
  },
  {
    url: "../img/bay.jpg",
    name: ""
  }
];
let current = 0;
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let header = document.getElementsByTagName("header")[0];
let length = bgs.length;
let interval;
function changeBg() {
  let bg = "url('" + bgs[current].url + "')";
  header.style.backgroundImage = bg;
}
//auto change background of header
// header.addEventListener("mouseleave", () => {
//   interval = setInterval(() => {
//     if (current >= length) {
//       current = 0;
//     }
//     changeBg();
//     current++;
//   }, 5000);
// });
// header.addEventListener("mouseenter", () => {
//   clearInterval(interval);
// });
next.addEventListener("click", () => {
  if (current >= length - 1) {
    current = -1;
  }
  current++;
  changeBg();
});
prev.addEventListener("click", () => {
  if (current <= 0) {
    current = length;
  }
  current--;
  changeBg();
});
