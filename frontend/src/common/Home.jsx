import React, {Component} from 'react';
import {hashHistory} from 'react-router';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        hashHistory.push('signup');
    }
    
    render() {
                    // <h1 className="hl-home">Welcome to Tracky!</h1>
        return(
            <div className="p-home">
                <div className="c-home">
                    <h1 className="hl-home">Get started with <strong>Tracky</strong> the app that makes it fun and easy to track your goals</h1>
                    <button onClick={this.handleClick} className="btn-home">Get Started</button>
                </div>
            </div>
        );
    }
}

export default Home;