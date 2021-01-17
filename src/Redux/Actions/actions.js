import {
    BUILDING,
    HEIGHT,
    MATERIAL,
    SIZE_X,
    SIZE_Y,
    TOTAL,
    SIZE,
    STEPS,
    GET_DATA
} from './actionType'

export const building = text => ({ type: BUILDING, payload: text })
export const height = text => ({ type: HEIGHT, payload: text })
export const material = text => ({ type: MATERIAL, payload: text })
export const sizeX = text => ({ type: SIZE_X, payload: text })
export const sizeY = text => ({ type: SIZE_Y, payload: text })
export const total = url => ({ type: TOTAL, payload: url })
export const size = arr => ({ type: SIZE, payload: arr})
export const steps = step => ({ type: STEPS, payload: step })
export const getData = data => ({ type: GET_DATA, payload: data })

export const getTotal = () => {
    return (dispatch, getState) => {
        const { rootReducer:  { building, height, material, sizeX, sizeY } } = getState()
        fetch(`https://data.techart.ru/lab/json/?building=${building}&height=${height}&material=${material}&sizex=${sizeX}&sizey=${sizeY}`)
            .then(res => res.json())
            .then(res => dispatch({ type: TOTAL, payload: res }))
    }
}