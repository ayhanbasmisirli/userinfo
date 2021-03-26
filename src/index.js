import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { userReducer } from "./features/userReducer"
import "./i18n"

const store = createStore(
  combineReducers({ userReducer }),
  applyMiddleware(thunk)
)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
