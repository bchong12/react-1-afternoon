import React from "react";

class FilterObject extends React.Component {
  constructor() {
    super();

    this.state = {
      unfilteredArray: [
        {
          name: "Ned",
          age: 21,
          job: "Engineer",
          smart: true,
        },
        {
          name: "Po",
          moviestar: true,
          fictional: true,
        },
        {
          name: "Wu Lang",
          random: true,
          job: "Unemployed",
        },
      ],
      userInput: "",
      filteredArray: [],
    };
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
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
          onClick={(e) => {
            let arr = [];
            this.state.unfilteredArray.forEach((obj) => {
              if (obj[this.state.userInput]) {
                arr.push(obj);
              }
            });

            this.setState({
              filteredArray: arr,
            });
          }}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
