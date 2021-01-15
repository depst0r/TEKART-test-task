import {
    BUILDING,
    HEIGHT,
    MATERIAL,
    SIZE_X,
    SIZE_Y,
    RESULT,
    MESSAGE,
    TOTAL,
} from '../Actions/actionType'

const initialState = {
    building: String,
    height: String,
    material: null,
    sizeX: String,
    sizeY: String,
    result: Boolean,
    message: String,
    total: String,
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
        case TOTAL: 
            return {
                ...state,
                total: action.payload
            }
        default: 
            return state
    }
}