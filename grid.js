const GRID_SIZE = 21

export const randomGridPosition = () => ({
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
})

export const outsideGrid = snakeHead => snakeHead.x < 1 || snakeHead.x > GRID_SIZE || snakeHead.y < 1 || snakeHead.y > GRID_SIZE