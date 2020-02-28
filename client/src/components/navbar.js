import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class Navbar extends Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "10px" }}
      >
        {localStorage.getItem("token") !== null ? (
          <button onClick={() => this.logout()}>Logout</button>
        ) : (
          <div>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/add">
              <button>Register</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(Navbar);
