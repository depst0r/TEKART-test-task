import {
    SET_PRICE,
    SET_STEP,
    SET_DATA,
    RESET_STATE,
    SET_LOADING
  } from '../Actions/actions'
  
  const initialState = {
    step: 1,
    building: null,
    height: 1,
    material: null,
    sizeX: null,
    sizeY: null,
    result: null,
    isLoading: false
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DATA:
        const { dataKey, dataValue } = action.payload;
        return {
          ...state,
          [dataKey]: dataValue
        };
      case SET_STEP:
        return {
          ...state,
          step: action.payload
        };
      case RESET_STATE:
        return {
          ...initialState
        };
      case SET_PRICE:
        return {
          ...state,
          result: action.data
        };
      case SET_LOADING:
        return {
          ...state,
          isLoading: action.payload
        };
      default:
        return state;
    }
  };
  