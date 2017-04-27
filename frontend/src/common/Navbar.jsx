import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Navbar extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="item-navbar" key={'nvb-23jnk'}>
          <Link className="link-navbar" to="/dashboard">
            <img src="./static/images/dashboard.svg" alt="" className="icn-dashboard"/>
          </Link>
        </li>,
        <li className="item-navbar" key={'nvb-8fu'}>        
          <Link className="link-navbar" to="/calendar">
            <img src="./static/images/calendar.svg" alt="" className="icn-calendar"/>          
          </Link>
        </li>,
        <li className="item-navbar" key={'nvb-jh1b'}>              
          <Link className="link-navbar" to="/new-task">
            <img src="./static/images/plus.svg" alt="" className="icn-calendar"/>          
          </Link>
        </li>,
        <div className="shape-navbar-divider" key={'nvb-2iuf'}></div>,
        <li className="item-navbar" key={'nvb-n919'}>        
          <Link className="link-navbar" to="/signout">
            <img src="./static/images/sign_out.svg" alt="" className="icn-signout"/>          
          </Link>
        </li>,
        <li className="item-navbar" key={'nvb-sdnk'}>
          <Link className="link-navbar" to="/reporting">
            Reporting
          </Link>
        </li>
      ];
    } else {
      return [
        <li className="item-navbar" key={'nvb-98sd'}>
          <Link className="link-navbar" to="/signin">Sign In</Link>
        </li>,
        <li className="item-navbar" key={'nvb-k2j3k'}>
          <Link className="link-navbar" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="c-navbar">
        <Link to="/" className="text-logo">
          <img className="img-logo" src="./static/images/logo.svg" alt=""/>
        </Link>
        <ul className="list-navbar">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Navbar);