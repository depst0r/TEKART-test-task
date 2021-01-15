import {
    BUILDING,
    HEIGHT,
    MATERIAL,
    SIZE_X,
    SIZE_Y,
    RESULT,
    MESSAGE,
    TOTAL,
    STEPS
} from '../Actions/actionType'

const initialState = {
    step: 1,
    building: String,
    height: String,
    material: null,
    sizeX: String,
    sizeY: String,
    result: Boolean,
    message: String,
    total: String,
    size: null
    // choice: Boolean
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
        case RESULT:
            return {
                ...state,
                result: action.payload
            }
        case MESSAGE:
            return {
                ...state,
                message: action.payload
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