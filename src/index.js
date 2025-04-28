import "./styles.css";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";
import { loadHomePage } from "./home.js";

export const content = document.getElementById("content");
export const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");


//event listeners
homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  homeBtn.classList.add("active");
  menuBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  loadHomePage();
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("active");
  homeBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  content.innerHTML = "";
  loadMenuPage();
});

contactBtn.addEventListener("click", () => {
  contactBtn.classList.add("active");
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  content.innerHTML = "";
  loadContactPage();
});

//loads the home page by default`   
loadHomePage();
