import React, { Component } from "react";

class Event extends Component {
  state = {
    details: false,
  };

  render() {
    const { event } = this.props;

    const showEventDetails = () => {
      this.setState({ details: true });
    };

    return (
      <div className="Event">
        <h1 className="summary">{event.summary}</h1>
        <p className="description">{event.description}</p>
        <button className="details" onClick={() => showEventDetails()}>
          Show More
        </button>
        {this.state.details && <div className="details-section"></div>}
      </div>
    );
  }
}

export default Event;
