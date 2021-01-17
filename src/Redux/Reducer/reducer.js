import {
    BUILDING,
    HEIGHT,
    MATERIAL,
    SIZE_X,
    SIZE_Y,
    TOTAL,
    STEPS,
    RESET_STATE,
} from '../Actions/actionType'

const initialState = {
    step: 1,
    building: null,
    height: 1,
    material: null,
    sizeX: null,
    sizeY: null,
    total: null
}

export const reducer = (state = initialState, action) => {
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
        case RESET_STATE:
            return {
                ...state = initialState
            }
        case STEPS:
            return {
                ...state,
                step: action.payload
            }
        case TOTAL: 
            return {
                ...state,
                total: action.payload
            }
        default: 
            return state
    }
}