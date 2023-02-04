import React from "react";
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import AuthProfile from '../Auth/AuthProfile';
import { withAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <h1><Link to="/" className="nav-link">CHEAP TRIP</Link></h1>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          {
            this.props.auth0.isAuthenticated ?
              <>
                <li><Link to="/saved-trips" className="nav-link">Saved Trips</Link></li>
                <li><AuthProfile /></li>
                <li><Logout /></li>
              </>
              :
              <li><Login /></li>
          }
        </ul>
      </div>
    )
  }
}

export default withAuth0(NavBar);