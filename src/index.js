import React from 'react'
import ReactDOM from 'react-dom'
import { App }from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './Redux/Reducer/reducers'

const state = createStore(reducers, applyMiddleware(logger, thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
