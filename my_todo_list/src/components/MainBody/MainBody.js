import React, { Component } from "react";
import "./MainBody.css";
import Category from "../Categories/category";
import { Input as MainBodyInput } from "../Input/Input";
import { MainBodyContent } from "../MainBody_Content/MainBody_Content";

const nextId = () => Math.random().toString(36).substr(2, 7);

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // {label: "!!! Going to learn React !!!", id:nextId()},
        // {label: "That is so good", id:nextId()},
        // {label: "I need a break...", id:nextId()}
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onDeleteItem(id) {
    // console.log(id);
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      return {
        data: newArr,
      };
    });
  }

  addItem(...args) {
    // console.log(arguments[1]);
    const newItem = {
      cat: args[0],
      label: args[1],
      id: nextId(),
    };
    // console.log(newItem);
    // console.log(this.state);
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      // console.log(newArr);
      return {
        data: newArr,
      };
    });
  }

  render() {
    const { data } = this.state;
    const { cats } = this.props;
    // console.log(cats);
    // console.log(`____render____`);
    // const inputValue = data;
    // console.log(inputValue);
    const catsToRender = cats.map((item) => (
      <Category nm={item.label} key={nextId()} />
    ));
    // console.log(catsToRender);
    return (
      <div className="MainBody">
        <MainBodyInput
          checked={false}
          onAdd={this.addItem}
          title="Выбери категорию"
          displayCatBtn
          placeholder="Добавьте новый пункт"
          cats={cats} /* {cat: true, label: 'ewrtgb', id: '0ineyq0'} */
        />
        <div className="MainBody_Header d-flex justify-content-around align-items-center">
          {catsToRender}
        </div>
        <MainBodyContent
          inputValue={data}
          onDeleteItem={this.onDeleteItem}
          cats={cats}
        />
      </div>
    );
  }
}

export default MainBody;
