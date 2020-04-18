import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

class Home extends Component {

    clicked() {
        console.log('This button is clicked!!');
    }

    head() {
        return (
            <Helmet>
                <title>Home Page Component</title>
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                <h1>My home page Component, saving changes...!!</h1>
                <button onClick={this.clicked}>Click Me!</button>
            </div>
        )
    }
}

export default Home
