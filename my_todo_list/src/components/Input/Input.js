// @ts-check
import React, { Component } from "react";
import "./Input.css";

let catsNames = ["..."];
class Input extends Component {
  constructor(props) {
    super(props);
    const { checked } =
      this.props; /* {cat: true, label: 'ewrtgb', id: '0ineyq0'} */
    const { cats } = this.props;
    // console.log(cats);
    // let catsNames=['...'];
    if (cats) {
      catsNames = cats.map((item) => item.label);
    }
    // categoryButton;
    this.state = {
      checked,
      text: "",
      categoryButton: catsNames[0],
      numOfClick: 0,
    };
    // console.log(this.state.categoryButton);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onClickBtn(...args) {
    this.setState({
      // eslint-disable-next-line
      checked: !this.state.checked, // eslint-disable-next-line
      numOfClick: ++this.state.numOfClick,
    });
    // const [cats] = arguments;
    // console.log(cats);
    this.setState({
      // eslint-disable-next-line
      categoryButton: args[this.state.numOfClick % args.length].label,
      // categoryButton : cats[this.state.numOfClick % cats.length].label
      // categoryButton : cats[this.state.numOfClick % cats.length].label
      // return{ categoryButton : cats[this.state.numOfClick % cats.length].label }
      //
    });
    // console.log(this.state.categoryButton);
    // numOfClick++;
  }

  onValueChange(e) {
    // console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
    // console.log(this.state.text);
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state.text);
    // eslint-disable-next-line
    this.props.onAdd(this.state.checked, this.state.text);
    this.setState({
      text: "",
    });
  }

  render() {
    // console.log(this.state.categoryButton);
    const numOfClick = 0;
    const { categoryButton, text } = this.state;
    const { title, placeholder, cats } = this.props;
    let { displayCatBtn } = this.props;
    // eslint-disable-next-line
    displayCatBtn ? (displayCatBtn = "d-block") : (displayCatBtn = "d-none");
    // this.state.checked ? categoryButton = 'Личное': categoryButton = 'Финансы';
    return (
      <form
        className="MainInput d-flex justify-content-center align-items-center mb-5"
        onSubmit={this.onSubmit}
      >
        <h4 className="my-0 mx-3">{title}</h4>
        <button
          type="button"
          className={`CategoryButton ${displayCatBtn} btn btn-outline-secondary mx-3 rounded-lg`}
          // onClick   = {this.onClickBtn}
          onClick={() => {
            this.onClickBtn(cats);
          }}
        >
          {categoryButton}
        </button>
        <input
          type="text"
          className="NewNote mx-3 px-2 py-1 rounded-lg"
          onChange={this.onValueChange}
          value={text}
          title=""
          placeholder={`${placeholder}`}
        />
        <button
          type="submit"
          className="AddButton btn btn-outline-secondary mx-3 rounded-lg"
          /* onClick={} */
        >
          Добавить
        </button>
      </form>
    );
  }
}
// eslint-disable-next-line
export { Input };
