import React, { Component } from "react";

class Clock extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  render() {
    return (
      <div className="clock">
        <h3 className="clock-title">This Is React Clock</h3>
        <h4 className="clock-state">
          It is {this.state.date.toLocaleTimeString()}.
        </h4>
      </div>
    );
  }
}

export default Clock;
