import React from "react";
import "./Home.css";

class Entry extends React.Component {
  render() {
    const { entry } = this.props;
    return (
      <div>
        <div>{entry.name}</div>
        <div>{entry.origin}</div>
      </div>
    );
  }
}

export default Entry;
