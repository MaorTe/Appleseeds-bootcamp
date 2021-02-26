// reset game button
resetButton.addEventListener("click", resetWorld);

// handle click on  a tile in the game world
function handleTileClick(event) {
  let pressedTileType = event.currentTarget.getAttribute("data-type");
  // if a tool or element were selected:
  if (document.querySelector(".selected")) {
    let selectedTool = document.querySelector(".selected");
    // check it's a tool and if the tile is accessible
    if (
      selectedTool.classList.contains("toolBox") &&
      isMinable(event.currentTarget)
    ) {
      mineTheTile(pressedTileType, selectedTool.getAttribute("data-type"));
      // an element was selected and needs to be positioned
    } else if (
      selectedTool.classList.contains("inventoryBox") &&
      checkInventory(selectedTool.getAttribute("data-type"))
    ) {
      placeTheTile(pressedTileType, selectedTool.getAttribute("data-type"));
    }
  }
}
// check if accessible for mining
// bug: can't mine top row, can't read attribute of the higher row
function isMinable(tile) {
  const tileRow = parseInt(tile.getAttribute("data-row"));
  const tileCol = parseInt(tile.getAttribute("data-col"));
  if (
    worldMatrix[tileRow - 1][tileCol].getAttribute("data-type") === "sky" ||
    worldMatrix[tileRow + 1][tileCol].getAttribute("data-type") === "sky" ||
    worldMatrix[tileRow][tileCol - 1].getAttribute("data-type") === "sky" ||
    worldMatrix[tileRow][tileCol + 1].getAttribute("data-type") === "sky"
  ) {
    return true;
  } else return false;
}
function checkInventory(tileToPlaceType) {
  if (
    parseInt(
      document.querySelector(`[data-type=${tileToPlaceType}].inventoryBox`)
        .textContent,
    ) > 0
  )
    return true;
  else return false;
}
// mine the tile if the correct tool was selected
function mineTheTile(tileToMine, toolToUse) {
  if (
    (tileToMine === "dirt" && toolToUse === "shovel") ||
    (tileToMine === "rock" && toolToUse === "pickaxe") ||
    ((tileToMine === "leaves" || tileToMine === "trunk") && toolToUse === "axe")
  ) {
    event.currentTarget.setAttribute("data-type", "sky");
    addToInventory(tileToMine);
  }
}
// place a tile from the inventory
function placeTheTile(tileOut, tileIn) {
  if (tileOut === "sky" || tileOut === "cloud") {
    removeFromInventory(tileIn);
    event.currentTarget.setAttribute("data-type", tileIn);
  }
}

// increase inventory count
function addToInventory(tileToMine) {
  document.querySelector(`[data-type=${tileToMine}].inventoryBox`).textContent =
    parseInt(
      document.querySelector(`[data-type=${tileToMine}].inventoryBox`)
        .textContent,
    ) + 1;
}
// reduce inventory count
function removeFromInventory(tileToPlace) {
  document.querySelector(
    `[data-type=${tileToPlace}].inventoryBox`,
  ).textContent =
    parseInt(
      document.querySelector(`[data-type=${tileToPlace}].inventoryBox`)
        .textContent,
    ) - 1;
}

function handleInventoryClick(event) {
  if (event.currentTarget.classList.contains("selected")) {
    event.currentTarget.classList.remove("selected");
  } else {
    fullInventoryNodeList.forEach((el) => el.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
  }
}
// select all inventory items
const fullInventoryNodeList = document.querySelectorAll("#sideToolBar li");
// add event listener to the tools and elements inventory items
fullInventoryNodeList.forEach((el) => {
  el.addEventListener("click", handleInventoryClick);
});
