import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import Counter from './components/Counter'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/counter" render={props => <Counter {...props} />} />
                <Route path="/" render={props => <Home {...props} />} />
            </Switch>
        )
    }
}

export default App
