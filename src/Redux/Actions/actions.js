import {
    BUILDING,
    HEIGHT,
    MATERIAL,
    SIZE_X,
    SIZE_Y,
    RESULT,
    MESSAGE,
    TOTAL,
} from './actionType'

export const building = text => ({ type: BUILDING, payload: text })
export const height = text => ({ type: HEIGHT, payload: text })
export const material = text => ({ type: MATERIAL, payload: text })
export const sizeX = text => ({ type: SIZE_X, payload: text })
export const sizeY = text => ({ type: SIZE_Y, payload: text })
export const result = text => ({ type: RESULT, payload: text })
export const message = text => ({ type: MESSAGE, payload: text })
export const total = url => ({ type: TOTAL, payload: url })