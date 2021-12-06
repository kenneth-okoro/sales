// testimonial data
const reviews = [
  {
    id: 1,
    name: "Kenneth Okoli",
    job: "web developer",
    img: "https://res.cloudinary.com/kenr0d/image/upload/v1638814439/demo/kenneth_zckyh2.jpg",
    text: "I earn passively using the ropes Justice showed me while I go about my daily job. He's a down to earth and straight forward person that I'm glad I took a shot for.",
  },
  {
    id: 2,
    name: "Elohor Jasmine",
    job: "Hair Stylist",
    img: "https://res.cloudinary.com/kenr0d/image/upload/v1638814553/demo/elohor_uqdvee.jpg",
    text: "Justice teaching skills is next to none. In spite of my busy schedule, he made the learning curve an easy one. I earn from my primary work and side hustle and that's a win-win for me.",
  },
  {
    id: 3,
    name: "Isaiah Edet",
    job: "Banker",
    img: "https://res.cloudinary.com/kenr0d/image/upload/v1638814951/demo/kiel_g5wrmi.jpg",
    text: "I've made quite a handsome amount of money from Justice mentorship. I got to learn that smart work is way better than hard work.",
  },
  {
    id: 4,
    name: "Daniel Osajini",
    job: "Blogger",
    img: "https://res.cloudinary.com/kenr0d/image/upload/v1638814295/demo/daniel-ohuabunwa_wzgo7q.jpg",
    text: "Crossing paths with Justice is one adventure that'll last a lifetime because he opened my eyes to passive ways of earning I wasn't aware of.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});