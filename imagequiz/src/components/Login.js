import React from "react";
import { Redirect } from "react-router-dom";
import "./Home.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", authenticated: false };
  }
  onSubmit = (event) => {
    if (this.state.username.trim().length > 0) {
      this.setState({ authenticated: true });
    }
    event.preventDefault();
  };

  onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    let from = { pathname: "/", state: { user: this.state.username } };
    if (this.state.authenticated) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <div className="title">Image Quiz</div>
        <div className="signin">
          <form onSubmit={this.onSubmit}>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            ></input>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
