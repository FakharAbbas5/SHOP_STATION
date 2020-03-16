import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favColor: "Green"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favColor: "Red"
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <h1>Bleed {this.state.favColor}</h1>
      </div>
    );
  }
}

export default Test;
