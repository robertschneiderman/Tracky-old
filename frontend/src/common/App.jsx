import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import { requestUser } from '../data/user/actions';
import { axioss } from './config';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser(localStorage.getItem('currentUser'));
    document.addEventListener('keyup', (e) => {
      if (e.key === '`') {
        let button = document.getElementsByClassName('btn-cron-btn')[0];
        button.style.visibility = button.style.visibility === 'hidden' ? 'visible' : 'hidden';
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated !== this.props.authenticated) {

      this.props.requestUser(localStorage.getItem('currentUser'));      
    }
  }

  handleClick() {
    axioss.post(`crons`);
  }

  render() {
    return(
      <div className="c-app">
        <Navbar />
        <button onClick={this.handleClick.bind(this)} style={{visibility: 'hidden'}} className="btn-cron-btn">Next Day</button>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

const mapDispatchToProps = dispatch => ({
  requestUser: payload => dispatch(requestUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);