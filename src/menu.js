import { content } from "./index.js";

export function loadMenuPage() {
  //header container
  const menuHeader = document.createElement("div");
  menuHeader.className = "menu-header";
  const menuText = document.createElement("span");
  menuText.textContent = "The Purrfect Menu";
  menuHeader.appendChild(menuText);

  content.appendChild(menuHeader);

  //menu items container
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container";

  const items = [
    {
      foodType: "☕  Drinks",
      foodName: "Catpuccino",
      foodDescription:
        "Frothy cappuccino topped with a pawprint cocoa dusting.",
    },
    {
      foodName: "Meowcha Latte ",
      foodDescription: "Rich chocolatey mocha latte.",
    },
    {
      foodName: "Vanilla Whisker Latte",
      foodDescription: "Classic vanilla latte with extra foam.",
    },
    {
      foodName: "Chai Meow Meow",
      foodDescription: "Spiced chai latte.",
    },
    {
      foodType: "🥐  Pastries",
      foodName: "Paw Print Croissant",
      foodDescription: "Buttery croissant with a chocolate paw design.",
    },
    {
      foodName: "Catnip Muffins ",
      foodDescription:
        "Blueberry muffins (again, no real catnip, just the name!).",
    },
    {
      foodName: "Whiskers' Waffles",
      foodDescription:
        "Frothy cappuccino topped with a pawprint cocoa dusting.",
    },
    {
      foodName: "Purring Pound Cake",
      foodDescription: "Sweet vanilla pound cake slice.",
    },
    {
      foodType: "🥪  Light Bites",
      foodName: "Tuna Melt Toastie",
      foodDescription: "Grilled cheese with a light tuna mix.",
    },
    {
      foodName: "Garden Kitty Salad",
      foodDescription: "Mixed greens, cranberries, pecans, goat cheese.",
    },
    {
      foodName: "Purrfect Avocado Toast",
      foodDescription: "Smashed avo on artisan bread.",
    },
    {
      foodName: "Tomcat Tomato Soup ",
      foodDescription: "Creamy tomato basil soup.",
    },
  ];

  items.forEach((item) => {


    //look in the items array and check if the object property foodType exists
    //if it does we create a foodtype div and put it inside its container
    if (item.foodType) {
        const foodType = document.createElement("div");
        foodType.className = "food-type";
        foodType.textContent = item.foodType;
        const foodTypeContainer = document.createElement("div");
        foodTypeContainer.className = "food-type-container";
        foodTypeContainer.appendChild(foodType);
        menuContainer.appendChild(foodTypeContainer);
      }

    const foodContainer = document.createElement("div");
    foodContainer.className = "food-container";
    
    //food name
    const foodName = document.createElement("div");
    foodName.className = "food-name";
    foodName.textContent = item.foodName;
    

    //food desc
    const foodDescription = document.createElement("div");
    foodDescription.className = "food-description";
    foodDescription.textContent = item.foodDescription;
   
    foodContainer.appendChild(foodName);
    foodContainer.appendChild(foodDescription);

    menuContainer.appendChild(foodContainer);
  });

  content.appendChild(menuContainer);
}
