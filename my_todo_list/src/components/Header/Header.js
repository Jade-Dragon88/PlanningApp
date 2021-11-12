// @ts-check
import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, margin } = this.props;
    return (
      <div className="MainHeader d-flex justify-content-center align-items-center">
        <h1 className={`${margin}`}>{name}</h1>
      </div>
    );
  }
}
// eslint-disable-next-line
export { Header };
