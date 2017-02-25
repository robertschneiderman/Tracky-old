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
        return(
            <div className="home-page">
                <div className="c-home">
                    <h1 className="hl-home">Welcome to Tracky!</h1>
                    <p className="text-home">Where all your tracking needs come true and so much more!</p>
                    <div onClick={this.handeClick} className="btn-home">Get Started</div>
                </div>
            </div>
        );
    }
}

export default Home;