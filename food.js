let food = { x: 0, y: 0 };
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expendSnake(EXPANSION_RATE);
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
