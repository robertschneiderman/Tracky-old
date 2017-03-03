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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authenticated !== this.props.authenticated) {

      this.props.requestUser(localStorage.getItem('currentUser'));      
    }
  }

  handleClick() {
    axioss.post(`cron`);
  }

  render() {
    return(
      <div className="c-app">
        <Navbar />
        <button onClick={this.handleClick.bind(this)} className="btn-cron-btn">Next Day</button>
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