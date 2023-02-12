import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Developer Connector</h1>
            <p class="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div class="container">
              {/* <a href="signup.html" class="btn btn-primary">
              Signup
            </a> */}
              <Link to="/signup" className="btn btn-primary">
                Signup
              </Link>
              {/* <a href="signin.html" class="btn btn-light">
              SignIn
            </a> */}
              <Link to="/signin" className="btn btn-light">
                SignIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
