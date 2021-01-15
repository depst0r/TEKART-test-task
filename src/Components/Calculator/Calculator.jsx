import React from 'react'
import { Link } from 'react-router-dom'

export const Calculator = () => {
    return <>
        <div className="card text-center">
            <div className="card-header">
                Калькулятор цены конструкций
                 </div>
            <div className="card-body">
                <span className='text-muted'>Шаг 1</span>
            <h5 className="card-title">Что будем строить?</h5>
                {/* <p className="card-text text-success font-weight-bold"></p> */}
                <Link to='/house' className="card-text text-success font-weight-bold">Жилой Дом</Link>
                <br/>
                <Link to='/garage' className="card-text text-success font-weight-bold">Гараж</Link>
                <p className="card-text text-success font-weight-bold"></p>
            </div>
            <div className="card-footer text-muted">
                <button type="button" className="btn btn-outline-warning">Отмена</button>
                <button type="button" className="btn btn-outline-info ml-5">Далее</button>
            </div>
        </div>
    </>
}



//app

import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Calculator } from './Components/Calculator/Calculator'

import 'bootstrap/dist/css/bootstrap.css'

export const App = () => {
  return<>
  <div className="container">
    <div className="row">
      <BrowserRouter>
          <Route exact path='/'>
            <Calculator />
          </Route>
      </BrowserRouter>
    </div>
    </div>
  </>
}