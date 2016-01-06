import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import MyApp from './reducers/reducers'


let store = createStore(MyApp)

// 1. create normal react components
// 2. wrap them in a container component, ie, App
// 3. wrap <App /> in <Provider />
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)