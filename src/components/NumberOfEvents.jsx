import React, { Component } from "react";

class NumberOfEvents extends Component {
  render() {
    const { number } = this.props;
    return (
      <div>
        <p className="number-of-events">{number}</p>
      </div>
    );
  }
}

export default NumberOfEvents;
