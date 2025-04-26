import "./styles.css";

// import pfp from './assets/pfp1.png';

import cat from "./assets/cat.jpg";
import cafe from "./assets/cafe.jpg";
import catHsOne from "./assets/cat-hs-1.jpg";
import catHsTwo from "./assets/cat-hs-2.jpg";
import catHsThree from "./assets/cat-hs-3.jpg";
import catHsFour from "./assets/cat-hs-4.jpg";

// const img = document.createElement('img');
// img.src = pfp;
// img.alt = 'Profile Picture';
// document.body.appendChild(img);

function loadHomePage() {
  const content = document.getElementById("content");

  // container divs
  const firstContainer = document.createElement("div");
  firstContainer.className = "first-container";

  const secondContainer = document.createElement("div");
  secondContainer.className = "second-container";

  const thirdContainer = document.createElement("div");
  thirdContainer.className = "third-container";

  const fourthContainer = document.createElement("div");
  fourthContainer.className = "fourth-container";

  const fifthContainer = document.createElement("div");
  fifthContainer.className = "fifth-container";

  // appending the container divs to the #content div
  content.appendChild(firstContainer);
  content.appendChild(secondContainer);
  content.appendChild(thirdContainer);
  content.appendChild(fourthContainer);
  content.appendChild(fifthContainer);

  //first container
  const welcome = document.createElement("div");
  welcome.className = "welcome";
  const welcomeText = document.createElement("span");
  welcomeText.textContent = "Welcome to Whiskers & Brews";
  welcome.appendChild(welcomeText);

  const catImg = document.createElement("img");
  catImg.src = cat;
  catImg.className = "cat overlay";

  firstContainer.appendChild(welcome);
  firstContainer.appendChild(catImg);

  //second container
  const about = document.createElement("div");
  about.className = "about";
  const aboutHeader = document.createElement("h1");
  const aboutText = document.createElement("span");
  aboutText.textContent =
    "At Whiskers & Brews, we believe every cup of coffee is better with a purring friend. Meet our adoptable cats while you sip your favorite brew.";
  aboutHeader.textContent = "About";
  about.appendChild(aboutHeader);
  about.appendChild(aboutText);

  const cafeImg = document.createElement("img");
  cafeImg.src = cafe;
  cafeImg.className = "cafe";

  secondContainer.appendChild(cafeImg);
  secondContainer.appendChild(about);

  //third container
  const hours = document.createElement("div");
  hours.className = "hours";
  const hoursHeader = document.createElement("h1");
  hoursHeader.textContent = "Hours";
  hours.appendChild(hoursHeader);

  const timeContainer = document.createElement("div");
  timeContainer.className = "time-container";

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  //looping through the days array to append each day to the time div
  days.forEach((day) => {
    const time = document.createElement("div");
    time.className = "time";

    const daysText = document.createElement("span");
    daysText.textContent = day;
    time.appendChild(daysText);

    const timeText = document.createElement("span");
    timeText.textContent = "6am - 8pm";
    time.appendChild(timeText);

    timeContainer.appendChild(time);
  });

  thirdContainer.appendChild(hours);
  thirdContainer.appendChild(timeContainer);

  //fourth container
  const location = document.createElement("h1");
  location.textContent = "Location";

  const address = document.createElement("span");
  address.textContent = "123 Forestville drive, CA";

  fourthContainer.appendChild(location);
  fourthContainer.appendChild(address);

  //fifth container
  const meetDiv = document.createElement("div");
  meetDiv.className = "meet";

  const meetTitle = document.createElement("h1");
  meetTitle.textContent = "Meet the cats";

  meetDiv.appendChild(meetTitle);

  const catPicContainer = document.createElement("div");
  catPicContainer.className = "cat-pic-container";

  const cats = [
    { name: "Greg", src: catHsOne },
    { name: "Benji", src: catHsTwo },
    { name: "Tyr", src: catHsThree },
    { name: "Loki", src: catHsFour },
  ];

  cats.forEach((cat) => {
    const catContainer = document.createElement("div");
    catContainer.className = "cat-container";

    const catImg = document.createElement("img");
    catImg.src = cat.src;
    catImg.className = "cat-hs";

    const catName = document.createElement("span");
    catName.textContent = cat.name;

    catContainer.appendChild(catImg);
    catContainer.appendChild(catName);
    catPicContainer.appendChild(catContainer);
  });

  fifthContainer.appendChild(meetDiv);
  fifthContainer.appendChild(catPicContainer);
}

loadHomePage();
