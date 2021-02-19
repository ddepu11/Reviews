import people from "./src/people.js";

const displayPic = document.getElementById("dp");
const nameEl = document.querySelector(".name");
const positionEl = document.querySelector(".position");
const previousBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.querySelector(".random");
const descriptionEl = document.getElementById("description");

let counter = 0;

// Put all the info in the dom
const showInfoInDom = (dp, name, position, description) => {
  displayPic.setAttribute("src", dp);
  nameEl.innerText = name;
  positionEl.innerText = position;
  descriptionEl.innerText = description;
};

// Event Listeners
// Show Previous Review
previousBtn.addEventListener("click", () => {
  if (counter < 0) {
    counter += people.length;
  }
  if (counter > people.length - 1) {
    counter = counter - people.length;
  }

  const { dp, name, position, description } = people[counter];

  showInfoInDom(dp, name, position, description);

  counter--;
});

// Show Next Review
nextBtn.addEventListener("click", () => {
  if (counter < 0) {
    counter += people.length;
  }

  if (counter > people.length - 1) {
    counter = counter - people.length;
  }

  const { dp, name, position, description } = people[counter];
  showInfoInDom(dp, name, position, description);

  counter++;
});

// Show Random Review
randomBtn.addEventListener("click", () => {
  const person = people[Math.floor(Math.random() * people.length)];

  const { dp, name, position, description } = person;
  showInfoInDom(dp, name, position, description);
});
