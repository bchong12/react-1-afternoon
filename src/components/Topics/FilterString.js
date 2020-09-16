import React from "react";

class FilterString extends React.Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        "Right",
        "Now",
        "Its",
        "A",
        "little",
        "hard",
        "Tyler",
        "Tiber",
        "George",
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unfilteredArray)}
        </span>
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
            const arr = [];
            this.state.unfilteredArray.forEach((string) => {
              if (string.includes(this.state.userInput)) {
                arr.push(string);
              }
            });

            this.setState({
              filteredArray: arr,
            });
          }}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
