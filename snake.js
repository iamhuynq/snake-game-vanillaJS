import { getInpurDirection } from './input.js'
export const snakeSpeed = 5
let newSegments = 0

const snakeBody = [{x: 11,y: 11}]

export const updateSnake = () => {
    addSegments()
    const inputDirection = getInpurDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i+1] = {...snakeBody[i]}  
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export const drawSnake = gameBoard => {
    snakeBody.forEach(element => {
        const snakeEl = document.createElement('div')
        snakeEl.style.gridRowStart = element.y
        snakeEl.style.gridColumnStart = element.x
        snakeEl.className = 'snake'
        gameBoard.appendChild(snakeEl)
    });
}

export const expandSnake = () => newSegments += 1

export const addSegments = () => {
    for (let index = 0; index < newSegments; index++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegments = 0;
}

export const onSnake = food => snakeBody.some(el => {
    return equalPositions(el, food)
})

const equalPositions = (pos1, pos2) => pos1.x === pos2.x && pos1.y === pos2.y

export const getSnakeHead = () => snakeBody[0]

export const snakeIntersection = () => snakeBody.some((el, index) => {
    if (index == 0) return false
    return equalPositions(el, snakeBody[0])
})