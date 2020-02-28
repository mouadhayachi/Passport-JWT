import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Add extends Component {
  state = {
    email: "",
    password: "",
    exist: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async addUser() {
    const { email, password } = this.state;
    axios
      .post("http://localhost:7000/api/users/", {
        email: email,
        password: password
      })
      .then(response => {
        console.log("the status is:", response.status);
        if (response.status === 200) this.props.history.push("/login");
      })
      .catch(err =>
        this.setState({ exist: "User Already exist", password: "" })
      );
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h3>Add User</h3>
        <input
          type="text"
          placeholder="Please type your email"
          name="email"
          value={this.state.email}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="text"
          placeholder="Please type your password"
          name="password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.addUser()}>Add</button>
        <p>{this.state.exist}</p>
      </div>
    );
  }
}
export default withRouter(Add);