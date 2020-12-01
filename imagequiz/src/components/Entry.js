import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import server from "../ServerInterface/server";
import "./Home.css";

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", entries: [], cursor: 0, score: 0, count: 1 };
  }

  checkAnswer = (event) => {
    const { entry } = this.props;
    if (entry.correct == event.target.value) {
      this.state.score += 1;
    }
    this.state.count += 1;
  };

  render() {
    const { entry } = this.props;
    const picture = entry.picture;
    const answers = entry.answers;
    if (this.state.count >= 6) {
      server.postScore(this.state.score, this.state.username);
      return (
        <div className="score">
          {this.state.score} out of 6{" "}
          <div>
            <Link to="/" className="hButton">
              Home
            </Link>
            <Link to="/quiz3" className="reButton">
              Retry
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          <img src={require("./images/" + picture)} alt="daffodil" />
          <div onChange={this.checkAnswer}>
            <input type="radio" value={answers[0]} name="flower" /> {answers[0]}
            <input type="radio" value={answers[1]} name="flower" /> {answers[1]}
            <input type="radio" value={answers[2]} name="flower" /> {answers[2]}
            <input type="radio" value={answers[3]} name="flower" /> {answers[3]}
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;
