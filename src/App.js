import "./App.css"
import Home from "./screens/Home"
import Navbar from "./component/Navbar"

import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from "./screens/Main"

function App() {
  return (
    <div className="App">
      <Router
        getUserConfirmation={(message, callback) => {
          const allowTransition = window.confirm(message)
          callback(allowTransition)
        }}
      >
        <Navbar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  )
}

export default App
