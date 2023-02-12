import React from "react";
import { Link } from "react-router-dom";
import Header2 from "./Header2";

//import React from "react";

const Header = (props) => {
  return (
    <>
      <Header2 appName={props.appName}></Header2>
      <nav class="navbar bg-dark">
        <h1>
          <Link to="/" className="fas fa-code">
            {props.appName}
          </Link>
          {/* <a href="/">
              <i class="fas fa-code"></i> DevConnector
            </a> */}
        </h1>
        <ul>
          <li>
            <a href="profile.html">Developers</a>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>

          {/* <li> */}
          {/* <a href="register.html" title="Register">
                <i class="fas fa-user"></i>
                <span class="hide-sm">Register</span>
              </a> */}
          {/* <Link to="/register">Register</Link>
            </li> */}

          <li>
            {/* <a href="login.html" title="Logout">
                <i class="fas fa-sign-in-alt"></i>
                <span class="hide-sm">Sign in</span>
              </a> */}
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
