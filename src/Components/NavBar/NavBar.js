import React from "react";
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import Profile from '../Auth/Profile';
import { withAuth0 } from "@auth0/auth0-react";
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <h1>CHEAP TRIP</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/saved-trips">Saved Trips</a></li>
          <li><a href="/about">About</a></li>
          {
          this.props.auth0.isAuthenticated ?
            <>
              <li><Profile /></li>
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