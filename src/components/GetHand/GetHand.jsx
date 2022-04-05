import React from "react";

class GetHand extends React.Component {
  render() {
    const { parent, playable, hand } = this.props;
    return (
      <div>
        {hand ? "It was a draw! Pick again" : ""}
        <br />
        {!playable ? "Please wait..." : ""}
        <br />
        <button disabled={!playable} onClick={() => parent.playHand("ROCK")}>
          Rock
        </button>
        <button disabled={!playable} onClick={() => parent.playHand("PAPER")}>
          Paper
        </button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand("SCISSORS")}
        >
          Scissors
        </button>
      </div>
    );
  }
}

export default GetHand;
