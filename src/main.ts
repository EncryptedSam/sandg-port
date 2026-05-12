import "./style.css";

declare const L: any;

const map = L.map("map").setView([17.385, 78.4867], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([17.385, 78.4867])
  .addTo(map)
  .bindPopup("S&G Constructions")
  .openPopup();

const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav?.classList.add(
      "bg-[rgba(8,7,6,0.97)]",
      "border-b",
      "border-[rgba(201,169,110,0.15)]",
    );

    nav?.classList.remove(
      "bg-gradient-to-b",
      "from-[rgba(8,7,6,0.95)]",
      "to-transparent",
    );

    logo?.classList.add("h-[60px]");

    logo?.classList.remove("h-[95px]");
  } else {
    nav?.classList.remove(
      "bg-[rgba(8,7,6,0.97)]",
      "border-b",
      "border-[rgba(201,169,110,0.15)]",
    );

    nav?.classList.add(
      "bg-gradient-to-b",
      "from-[rgba(8,7,6,0.95)]",
      "to-transparent",
    );

    logo?.classList.add("h-[95px]");

    logo?.classList.remove("h-[60px]");
  }
});

const track = document.getElementById("testiTrack") as HTMLElement;
const prevBtn = document.getElementById("testiPrev") as HTMLButtonElement;
const nextBtn = document.getElementById("testiNext") as HTMLButtonElement;
const dots = document.querySelectorAll(".testi-dot");

let currentSlide = 0;
const totalSlides = dots.length;

const updateSlider = () => {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
};

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    updateSlider();
  });
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}, 5000);

updateSlider();
