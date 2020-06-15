import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

const randomNewPosition = () => {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

let food = randomNewPosition()

export const updateFood = () => {
    if (onSnake(food)) {
        expandSnake()
        food = randomNewPosition()
    }
}

export const drawFood = gameBoard => {
    const foodEl = document.createElement('div')
    foodEl.style.gridRowStart = food.y
    foodEl.style.gridColumnStart = food.x
    foodEl.className = 'food'
    gameBoard.appendChild(foodEl)
}