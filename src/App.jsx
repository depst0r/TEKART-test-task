import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { building, height, material, sizeX, sizeY, steps, getTotal } from './Redux/Actions/actions'

import 'bootstrap/dist/css/bootstrap.css'

export const App = () => {

  const [checkedValue, setCeckedValue] = useState(String)
  const [heightValue, setHeightValue] = useState(String)
  const [materialValues, setMaterialValues] = useState(String)
  const [sizeValue_X, setSizeValue_X] = useState(String)
  const [sizeValue_Y, setSizeValue_Y] = useState(String)

  const dispatch = useDispatch()
  const selector = useSelector(state => state.rootReducer)


  const click = (action, step) => {
    dispatch(action)
    dispatch(step)
  }

  const size = ( arg2, arg3, step) => {
    dispatch(arg2)
    dispatch(arg3)
    dispatch(step)
    totalResponse()
  }

  const totalResponse = () => {
      dispatch(
        getTotal()
      )
  }



const renderItems = () => {
  switch (selector.step) {
    case 1:
        return (
      <>
      <div className="card-body">
      <span className='text-muted'>Шаг 1</span>
      <h5 className="card-title">Что будем строить?</h5>
      <input type="radio" value='1' className="btn-check" name="btnradio" id='House' autoComplete="off" onChange={e => setCeckedValue(e.target.value)} />
      <label className="card-text text-success font-weight-bold" htmlFor="House">Жилой Дом</label>
      <br />
      <input type="radio" value='2' className="btn-check" name="btnradio" id="Garage" autoComplete="off" onChange={e => setCeckedValue(e.target.value)} />
      <label className="card-text text-success font-weight-bold" htmlFor="Garage">Гараж</label>
    </div>
    <div className="card-footer text-muted">
      <button type="button" className="btn btn-outline-warning" onClick={() => dispatch(steps(1))}>Отмена</button>
      {checkedValue && <button 
      type="button" 
      className="btn btn-outline-info ml-5" 
      onClick={() => 
        click(building(checkedValue), steps(2))}>Далее</button>
    }
    </div>
  </>
  )
  case 2:
    return (
        <>
        <div className="card-body">
        <span className='text-muted'>Шаг 2</span>
        <h5 className="card-title">Колличество этажей (число):</h5>
          <input type="number" value={heightValue} onChange={e => setHeightValue(e.target.value)}/>
      </div>
      <div className="card-footer text-muted">
        <button type="button" className="btn btn-outline-warning"  onClick={() => dispatch(steps(1))}>Отмена</button>
        {heightValue && <button type="button" className="btn btn-outline-info ml-5" onClick={() => click(height(heightValue), steps(3))}>Далее</button>}
      </div>
    </>
    )
  case 3:
    return (
      <>
      <div className="card-body">
      <span className='text-muted'>Шаг 3</span>
      <h5 className="card-title">Материал Стен:</h5>
      <input type="radio" value='1' className="btn-check" name="btnradio" id='1' autoComplete="off" onChange={e => setMaterialValues(e.target.value)} />
      <label className="card-text text-success font-weight-bold" htmlFor="1">Кирпич</label>
      <br />
      <input type="radio" value='2' className="btn-check" name="btnradio" id="2" autoComplete="off" onChange={e => setMaterialValues(e.target.value)} />
      <label className="card-text text-success font-weight-bold" htmlFor="2">Шлакоблок</label>
      <br/>
      <input type="radio" value='3' className="btn-check" name="btnradio" id="3" autoComplete="off" onChange={e => setMaterialValues(e.target.value)} />
      <label className="card-text text-success font-weight-bold" htmlFor="3">Деревянный брус</label>
    </div>
    <div className="card-footer text-muted">
      <button type="button" className="btn btn-outline-warning"  onClick={() => dispatch(steps(1))}>Отмена</button>
      {materialValues && <button type="button" className="btn btn-outline-info ml-5" onClick={() => click(material(materialValues), steps(4))}>Далее</button>}
    </div>
  </>
    )
  case 4:
    return (
      <>
      <div className="card-body">
      <span className='text-muted'>Шаг 4</span>
      <h5 className="card-title">Длинна стен (в метрах):</h5>
        <input type="number" value={sizeValue_X} onChange={e => setSizeValue_X(e.target.value)}/>
        <span>X</span>
        <input type="number" value={sizeValue_Y} onChange={e => setSizeValue_Y(e.target.value)}/>
    </div>
    <div className="card-footer text-muted">
      <button type="button" className="btn btn-outline-warning"  onClick={() => dispatch(steps(1))}>Отмена</button>
      <button 
      type="button" 
      className="btn btn-outline-info ml-5" 
      onClick={() => size(sizeX(sizeValue_X), sizeY(sizeValue_Y), steps(5))}
      >Далее</button>
    </div>
  </>
    )
  case 5:
    return (
      <>
      <div className="card-body">
      <span className='text-muted'>Результат расчета</span>
      <h5 className="card-title">{selector?.total?.result === 'ok' ? (
        <p>Успешно</p>
      ) : <h1>Ошибка</h1> }</h5>
        <p>{selector?.total?.message}</p>
    </div>
    <div className="card-footer text-muted">
      <button type="button" className="btn btn-outline-warning" onClick={() => dispatch(steps(1))}>Новый расчет</button>
    </div>
  </>
    )
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
