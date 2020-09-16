import React from "react";

class Sum extends React.Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            this.setState({
              number1: e.target.value,
            });
          }}
        />
        <input
          className="inputLine"
          onChange={(e) => {
            this.setState({
              number2: e.target.value,
            });
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.setState({
              sum: parseInt(this.state.number1) + parseInt(this.state.number2),
            });
          }}
        >
          Add
        </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
