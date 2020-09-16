import React from "react";

class Palindrome extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      Palindrome: "",
    };
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={(e) => {
            this.setState({
              userInput: e.target.value,
            });
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            let backwardsArr = [];
            let palindrome = false;
            this.state.userInput.split("").forEach((letter) => {
              backwardsArr.unshift(letter);
            });

            if (this.state.userInput === backwardsArr.join("")) {
              palindrome = true;
            }

            this.setState({
              Palindrome: palindrome,
            });
          }}
        >
          Check
        </button>
        <span className="resultsBox">
          Palindrome: {JSON.stringify(this.state.Palindrome)}
        </span>
      </div>
    );
  }
}

export default Palindrome;
