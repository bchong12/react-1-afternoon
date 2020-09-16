import React from "react";

class EvenAndOdd extends React.Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          onChange={(e) => {
            this.handleChange(e);
          }}
          className="inputLine"
        />
        <button
          onClick={() => {
            let evens = [];
            let odds = [];
            this.state.userInput.split(",").forEach((num) => {
              if (num % 2 === 0) {
                evens.push(parseInt(num));
              } else {
                odds.push(parseInt(num));
              }
            });
            this.setState({ evenArray: evens, oddArray: odds });
          }}
          className="confirmationButton"
        >
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
