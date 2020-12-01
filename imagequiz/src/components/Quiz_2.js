import React from "react";
import server from "../ServerInterface/server";
import Entry from "./Entry";
import "./Home.css";

class Quiz_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", entries: [], cursor: 0 };
  }

  handleKeyDown = (e) => {
    const cursor = this.state.cursor;
    const entries = this.state.entries;
    if (e.keyCode === 39 && cursor < entries.length - 1) {
      //right arrow key
      this.setState({ cursor: cursor + 1 });
    } else if (e.keyCode === 37 && cursor > 0) {
      //left arrow key
      this.setState({ cursor: cursor - 1 });
    }
  };

  onSubmit = (event) => {
    if (this.state.username.trim().length > 0) {
      this.setState({ authenticated: true });
    }
    event.preventDefault();
  };

  left = () => {
    const cursor = this.state.cursor;
    if (cursor > 0) {
      this.setState({ cursor: cursor - 1 });
    }
  };

  right = () => {
    const cursor = this.state.cursor;
    const entries = this.state.entries;
    if (cursor < entries.length - 1) {
      this.setState({ cursor: cursor + 1 });
    }
  };

  body = () => {
    const { entries, cursor } = this.state;
    return (
      <div className="content">
        {entries.length > 0 ? <Entry entry={entries[cursor]} /> : ""}
      </div>
    );
  };

  onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    server
      .fetchQuiz2()
      .then((x) => this.setState({ entries: x }))
      .catch((e) => console.log(e));
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <div className="title">Image Quiz</div>
        <div className="quiz">
          {this.body()}
          <button onClick={this.left} className="lButton">
            Back
          </button>
          <button onClick={this.right} className="rButton">
            {" "}
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Quiz_2;
