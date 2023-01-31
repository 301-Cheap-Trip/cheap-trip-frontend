import React from "react";
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <h1>CHEAP TRIP</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Saved Trips</a></li>
          <li><a href="/">About</a></li>
          <li><button>Login</button></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;