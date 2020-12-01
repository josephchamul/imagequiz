import React from "react";
import { Link } from "react-router-dom";
import server from "../ServerInterface/server";
import Entry from "./Entry";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", quizzes: [], cursor: 0 };
  }

  componentDidMount() {
    server
      .fetchQuizzes()
      .then((x) => this.setState({ quizzes: x }))
      .catch((e) => console.log(e));
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
    //alert(this.state.quizzes);
    return (
      <div>
        <div className="loginButton">
          {username.length > 0 ? (
            username
          ) : (
            <Link to="/login" className="button">
              Login
            </Link>
          )}
        </div>
        <div className="title">Image Quiz</div>
        <div className="info"> Click on an Image to Start a Quiz</div>
        <div className="body">
          {this.state.quizzes.map((q) => (
            <Link to={{ pathname: "/quiz" + q.id }}>
              <img src={require("./images/" + q.picture)} alt={q.name} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
