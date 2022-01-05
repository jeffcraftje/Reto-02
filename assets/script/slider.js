const slides = document.querySelector(".slides");
const containerDots = document.querySelector(".container-dots");

let slideIndex = 1;
const images = [
  { src: "./assets/img/pelicula-1 (1).jpg"},
  { src: "./assets/img/pelicula-1 (2).jpg"},
  { src: "./assets/img/pelicula-1 (3).jpg"},
  { src: "./assets/img/pelicula-1 (4).jpg"},
  { src: "./assets/img/pelicula-1 (5).jpg"}
];
images.map((img) => {

let imgTag = document.createElement("img");
imgTag.src = img.src;
  
let dot = document.createElement("div");
dot.classList.add("dot");
slides.appendChild(imgTag);
containerDots.appendChild(dot);
});


const dots = containerDots.querySelectorAll("*").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    moveDot(index + 1);
  });
});


function moveDot(index) {
  slideIndex = index;
  updateImageAndDot();
}


function updateImageAndDot() {
  const activeSlide = slides.querySelector("[data-active]");
  slides.children[slideIndex - 1].dataset.active = true;
  activeSlide && delete activeSlide.dataset.active;

  const activeDot = containerDots.querySelector("[data-active]");
  containerDots.children[slideIndex - 1].dataset.active = true;
  activeDot && delete activeDot.dataset.active;
}


const nextSlide = () => {
  if (slideIndex !== images.length) {
    ++slideIndex;
  } else if (slideIndex === images.length) {
    slideIndex = 1;
  }
  updateImageAndDot();
};
const nextBtn = document.querySelector(".next");
nextBtn.onclick = nextSlide;

const prevSlide = () => {
  if (slideIndex !== 1) {
    --slideIndex;
  } else if (slideIndex === 1) {
    slideIndex = images.length;
  }
  updateImageAndDot();
};

const prevBtn = document.querySelector(".prev");
prevBtn.onclick = prevSlide;

updateImageAndDot();
