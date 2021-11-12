// @ts-check
import React, { Component } from "react";
import "./category.css";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let borderClass;
    const { nm, border } = this.props; // eslint-disable-next-line
    border === "left" ? (borderClass = "left") : (borderClass = "right");
    const generatedClass = `Category ${borderClass} w-100 d-flex justify-content-around align-items-center`;
    return (
      <div className={generatedClass}>
        <h2 className="">{nm}</h2>
      </div>
    );
  }
}

export default Category;
