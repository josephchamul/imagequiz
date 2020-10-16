import React from "react";
import { Link } from "react-router-dom";
import server from "./ServerInterface/server";
import Entry from "./Entry";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", entries: [], cursor: 0 };
  }

  body = () => {
    const { entries, cursor } = this.state;
    return (
      <div className="content">
        {entries.length > 0 ? (
          <div>
            <Entry entry={entries[cursor]} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  componentDidMount() {
    const entries = server.fetchEntries();
    this.setState({ entries: entries });
  }

  render() {
    let username = "";
    const location = this.props.location;
    if (location) {
      if (location.state) {
        if (location.state.user) {
          username = location.state.user;
        }
      }
    }
    return (
      <div>
        <div className="loginButton">
          {username.length > 0 ? username : <Link to="/login">Login</Link>}
        </div>
        <div className="title">Image Quiz</div>
        {this.body()}
        <div className="images">
          <img
            src={require("./images/cherryblossom.png")}
            alt="cherryblossom"
          />
          <img src={require("./images/daffodil.png")} alt="daffodil" />
          <img src={require("./images/daisy.jpg")} alt="daisy" />
          <img src={require("./images/lily.jpg")} alt="lily" />
          <div className="flowerName">Cherryblossom Daffodil Daisy Lily</div>
          <img src={require("./images/rose.png")} alt="rose" />
          <img src={require("./images/sunflower.png")} alt="sunflower" />
          <img src={require("./images/tulip.png")} alt="tulip" />
          <img src={require("./images/waterlily.png")} alt="waterlily" />
          <div className="flowerName">Rose Sunflower Tulip Waterlily</div>
        </div>
      </div>
    );
  }
}

export default Home;
