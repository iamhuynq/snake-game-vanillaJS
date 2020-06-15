import { snakeSpeed, updateSnake, drawSnake, snakeIntersection, getSnakeHead } from './snake.js'
import { updateFood, drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

const main = currentTime => {
    if (gameOver){
        if (confirm('You lose. Play again?')){
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime
    update()
    draw()
}

const update = () => {
    updateSnake()
    updateFood()
    checkDeath()
}

const draw = () => {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
window.requestAnimationFrame(main)

const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
