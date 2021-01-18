export const SET_DATA = "SET_DATA";
export const SET_PRICE = "SET_PRICE";
export const SET_STEP = "SET_STEP";
export const RESET_STATE = "RESET_STATE";
export const SET_LOADING = "SET_LOADING";

export const setData = payload => ({ type: SET_DATA, payload });
export const setStep = step => ({ type: SET_STEP, payload: step });
export const resetState = () => ({ type: RESET_STATE });

export const getPrice = () => {
  return (dispatch, getState) => {
    dispatch({ type: SET_LOADING, payload: true })
    const { building, height, material, sizeX, sizeY } = getState()
    fetch(
      `https://data.techart.ru/lab/json/?building=${building}&height=${height}&material=${material}&sizex=${sizeX}&sizey=${sizeY}`
    )
      .then(res => res.json())
      .then(res => {
        dispatch({ type: SET_PRICE, data: res })
        dispatch({ type: SET_LOADING, payload: false })
      })
      .catch(err => dispatch({ type: SET_LOADING, payload: false }))
  }
}
