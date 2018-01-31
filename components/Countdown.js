import React, { Fragment } from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0
    }
  }
  
  componentDidMount() {
    this.calculateRemainingDays();
    this._interval = setInterval(this.calculateRemainingDays, 60000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  calculateRemainingDays() {
    const todayDate = new Date().getTime();
    const distance = this.props.date - todayDate;
    const days = Math.max(0, Math.floor( distance / (1000*60*60*24) ));
    this.setState({ days }); // This is shorthand for { days: days }
  }
  
  render() {
    return (
      <Fragment><span>{this.state.days}</span> days</Fragment>
    )
  }
}

Countdown.defaultProps = {
  date: new Date("March 23, 2018").getTime()
};

export default Countdown;