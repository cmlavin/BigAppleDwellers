import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Welcome from './components/Welcome'
import Homepage from './components/Homepage'
import './App.css'

class App extends React.Component {
  renderWelcome = () => {
    return <Welcome />
  }

  renderHomepage = () => {
    return <Homepage />
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' render={this.renderWelcome} />
            <Route exact path='/home' render={this.renderHomepage} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
