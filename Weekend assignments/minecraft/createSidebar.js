// select layout containers
const sideToolBar = document.querySelector("#sideToolBar");
const tools = document.querySelector("#tools");
const inventory = document.querySelector("#inventory");

// sideToolBar
// add header
const sidebarHeader = document.createElement("h1");
sidebarHeader.textContent = "Inventory";
sidebarHeader.classList.add("header");
sideToolBar.insertAdjacentElement("afterbegin", sidebarHeader);

// add tools
// add header
const toolsHeader = document.createElement("h2");
toolsHeader.textContent = "Tools";
toolsHeader.classList.add("header");
tools.insertAdjacentElement("afterbegin", toolsHeader);
// create a tools
const toolsList = document.createElement("ul");
toolsList.classList.add("toolsList");
tools.insertAdjacentElement("beforeend", toolsList);

function creatTool(name) {
  const element = document.createElement("li");
  element.setAttribute("data-type", name);
  element.textContent = name;
  element.classList.add("toolBox");
  toolsList.appendChild(element);
}
creatTool("axe");
creatTool("pickaxe");
creatTool("shovel");

// add inventory
// add header
const inventoryHeader = document.createElement("h2");
inventoryHeader.textContent = "Elements";
inventoryHeader.classList.add("header");
inventory.insertAdjacentElement("afterbegin", inventoryHeader);
// create an inventory
const inventoryList = document.createElement("ul");
inventoryList.classList.add("inventoryList");
inventory.insertAdjacentElement("beforeend", inventoryList);

function creatInventoryItem(name) {
  const element = document.createElement("li");
  element.setAttribute("data-type", name);
  element.textContent = 0;
  element.classList.add("inventoryBox");
  inventoryList.appendChild(element);
}
creatInventoryItem("trunk");
creatInventoryItem("leaves");
creatInventoryItem("rock");
creatInventoryItem("dirt");

// create reset world button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset World";
resetButton.classList.add("resetBtn");
sideToolBar.insertAdjacentElement("beforeend", resetButton);

// create restart game button
const restartGameButton = document.createElement("button");
restartGameButton.textContent = "Restart Game";
restartGameButton.classList.add("restartGameButton");
sideToolBar.insertAdjacentElement("beforeend", restartGameButton);
