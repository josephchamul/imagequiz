import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", showLoginForm: false, authenticated: false };
  }
  login = () => {
    this.setState({
      showLoginForm: true,
    });
  };
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
    if (!this.state.authenticated && this.state.showLoginForm) {
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
    return (
      <div>
        <div className="loginButton">
          {this.state.authenticated ? (
            this.state.username
          ) : (
            <button onClick={this.login}>Login</button>
          )}
        </div>
        <div className="title">Image Quiz</div>
        <div className="images">
          <img
            src={require("./images/cherryblossom.png")}
            alt="cherryblossom"
          />
          <img src={require("./images/daffodil.png")} alt="daffodil" />
          <img src={require("./images/daisy.jpg")} alt="daisy" />
          <img src={require("./images/lily.jpg")} alt="lily" />
          <img src={require("./images/rose.png")} alt="rose" />
          <img src={require("./images/sunflower.png")} alt="sunflower" />
          <img src={require("./images/tulip.png")} alt="tulip" />
          <img src={require("./images/waterlily.png")} alt="waterlily" />
        </div>
      </div>
    );
  }
}

export default Home;
