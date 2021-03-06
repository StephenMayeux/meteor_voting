import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Polling Station</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Accounts /></li>
          <li><Link to="/create">Create Poll</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
