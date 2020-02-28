import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Home extends Component {
  state = {
    email: ""
  };

  componentDidMount() {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    this.setState({ email: decoded.email });
  }
  render() {
    return (
      <div>
        <h1>Dashboard Admin</h1>
        <h2>Hello {this.state.email}!</h2>
      </div>
    );
  }
}
export default Home;
