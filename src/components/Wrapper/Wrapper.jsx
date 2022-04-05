import React from "react";

class Wrapper extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h1>Rock, Paper, Scissors!</h1>
          {content}
        </div>
      </div>
    );
  }
}

export default Wrapper;
