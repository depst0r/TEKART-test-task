import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { building, height, material, sizeX, sizeY, steps, getTotal, getData } from './Redux/Actions/actions'

import 'bootstrap/dist/css/bootstrap.css'

const StepOne = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.rootReducer)

  return (
    <>
      <div className="card-body">
        <span className='text-muted'>Шаг 1</span>
        <h5 className="card-title">Что будем строить?</h5>
        <input
          type="radio"
          value='1'
          className="btn-check"
          name="btnradio" id='House'
          autoComplete="off"
          onChange={e => dispatch(building(e.target.value))} />
        <label
          className="card-text text-success font-weight-bold"
          htmlFor="House">Жилой Дом</label>
        <br />
        <input
          type="radio"
          value='2'
          className="btn-check"
          name="btnradio" id="Garage"
          autoComplete="off"
          onChange={e => dispatch(building(e.target.value))} />
        <label
          className="card-text text-success font-weight-bold"
          htmlFor="Garage">Гараж</label>
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => dispatch(steps(1))}>Отмена</button>
        {state.building && <button
          type="button"
          className="btn btn-outline-info ml-5"
          onClick={() => dispatch(steps(2))}>Далее</button>
        }
      </div>
    </>
  )
}

 const StepTwo = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.rootReducer)

  return (
    <>
      <div className="card-body">
        <span
          className='text-muted'>Шаг 2</span>
        <h5
          className="card-title">Колличество этажей (число):</h5>
        <input
          type="number"
          value={state.height}
          onChange={e => dispatch(height(e.target.value))} />
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => dispatch(steps(1))}>Отмена</button>
        {state.height &&
          <button
            type="button"
            className="btn btn-outline-info ml-5"
            onClick={() => dispatch(steps(3))}>Далее</button>}
      </div>
        </>
  )
}

 const StepThree = () => {

  const state = useSelector(state => state.rootReducer)
  const dispatch = useDispatch()


  return (
    <>
      <div className="card-body">
        {state.building === '1' ? (
          <span className='text-muted'>Шаг 3</span>
        ) : (
          <span className='text-muted'>Шаг 2</span>
        )}
        <h5 className="card-title">Материал Стен:</h5>
        <input
          type="radio"
          value='1'
          className="btn-check"
          name="btnradio"
          id='1'
          autoComplete="off"
          onChange={e => dispatch(material(e.target.value))} />
        <label
          className="card-text text-success font-weight-bold"
          htmlFor="1">
          Кирпич
            </label>
        <br />
        <input
          type="radio"
          value='2'
          className="btn-check"
          name="btnradio"
          id="2"
          autoComplete="off"
          onChange={e => dispatch(material(e.target.value))} />
        <label
          className="card-text text-success font-weight-bold"
          htmlFor="2">Шлакоблок</label>
        <br />
        <input
          type="radio"
          value='3'
          className="btn-check"
          name="btnradio"
          id="3" autoComplete="off"
          onChange={e => dispatch(material(e.target.value))} />
        <label className="card-text text-success font-weight-bold" htmlFor="3">Деревянный брус</label>
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => dispatch(steps(1))}>Отмена</button>
        {state.material &&
          <button
            type="button"
            className="btn btn-outline-info ml-5"
            onClick={() => dispatch(steps(4))}>Далее</button>}
      </div>
    </>
  )
}

 const StepFour = () => {

  const state = useSelector(state => state.rootReducer)
  const dispatch = useDispatch()

  const buildingRequest = (step) => {
    dispatch(step)
    totalResponse()
  }

  const totalResponse = () => {
    dispatch(
      getTotal()
    )
  }

  return (
    <>
      <div className="card-body">
        {state.building === '2' ? (
          <span className='text-muted'>Шаг 3</span>
        ) : (
            <span className='text-muted'>Шаг 4</span>
          )}
        <h5 className="card-title">Длинна стен (в метрах):</h5>
        <input
          type="number"
          value={state.sizeX}
          onChange={e => dispatch(sizeX(e.target.value))} />
        <span>X</span>
        <input
          type="number"
          value={state.sizeY}
          onChange={e => dispatch(sizeY(e.target.value))} />
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => dispatch(steps(1))}>Отмена</button>
        <button
          type="button"
          className="btn btn-outline-info ml-5"
          onClick={() => buildingRequest(steps(5))}
        >Далее</button>
      </div>
    </>
  )
}

 const StepFive = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.rootReducer)

  return (
    <>
      <div className="card-body">
        <span className='text-muted'>Результат расчета</span>
        <div className="card-title">{state?.total?.result === 'ok' ? (
          <>
            <h1>Успешно</h1>
            <p>{state?.total?.message}</p>
          </>
        ) :
          <>
            <h1>Ошибка</h1>
            <p className='text-danger'>{state?.total?.message}</p>
          </>
        }
        </div>
      </div>
      <div className="card-footer text-muted">
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={() => dispatch(steps(1))}>Новый расчет</button>
      </div>
    </>
  )
}

export const App = () => {

  const state = useSelector(state => state.rootReducer)

  const renderItems = () => {
    switch (state.step) {
      case 1:
         return <StepOne />
      case 2:
          return <>
            {state.building === '2' ? (
              <StepThree />
            ) : <StepTwo />}
          </>
      case 3:
        return <StepThree />
      case 4:
        return <StepFour />
      case 5:
        return <StepFive />
      default:
        break;
    }
  }

  return <>
    <div className="card text-center">
      <div className="card-header">
        Калькулятор цены конструкций
     </div>
      {renderItems()}
    </div>
  </>
}
