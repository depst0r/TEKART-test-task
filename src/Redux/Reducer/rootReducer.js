import {
    BUILDING,
    HEIGHT,
    MATERIAL,
    SIZE_X,
    SIZE_Y,
    TOTAL,
    STEPS
} from '../Actions/actionType'

const initialState = {
    step: 1,
    building: null,
    height: 1,
    material: null,
    sizeX: null,
    sizeY: null,
    total: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUILDING:
            return {
                ...state,
                building: action.payload
            }
        case HEIGHT:
            return {
                ...state,
                height: action.payload
            }
        case MATERIAL:
            return {
                ...state,
                material: action.payload
            }
        case SIZE_X:
            return {
                ...state,
                sizeX: action.payload
            }
        case SIZE_Y:
            return {
                ...state,
                sizeY: action.payload
            }
        case STEPS:
            return {
                ...state,
                step: action.payload
            }
        case TOTAL: 
        console.log('total', action.data)
            return {
                ...state,
                total: action.data
            }
        default: 
            return state
    }
}