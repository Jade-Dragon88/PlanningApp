//@ts-check
import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
    constructor(props) {
        super(props);
        let {checked, cats} = this.props;
        let catsNames;
        if (cats){
          catsNames = cats.map(item => {return item.label})
        }
            // categoryButton;
        this.state = {
            checked: checked,
            text: '',
            categoryButton: '...',
            numOfClick:0,
        }
        // console.log(this.state.categoryButton);
        this.onClickBtn = this.onClickBtn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onClickBtn(){
        this.setState({
            checked: !this.state.checked,
            numOfClick: ++(this.state.numOfClick),
        })
        let [cats] = arguments;
        // console.log(cats);
        this.setState({
          categoryButton : cats[this.state.numOfClick % cats.length].label
        })
        console.log(this.state.categoryButton);
        // numOfClick++;

    }

    onValueChange(e){
      // console.log(e.target.value);
      this.setState({
          text: e.target.value
      });
      // console.log(this.state.text);
    }
    onSubmit(e){
      e.preventDefault();
      // console.log(this.state.text);
      this.props.onAdd(this.state.checked,this.state.text);
      this.setState({
        text: ''
      });
    }
    render() {
        // console.log(this.state.categoryButton);
        let numOfClick = 0;
        let {title, displayCatBtn, placeholder, cats} = this.props;
        displayCatBtn ? displayCatBtn='d-block':displayCatBtn='d-none';
        // this.state.checked ? categoryButton = 'Личное': categoryButton = 'Финансы';
        return (
            <form
              className='MainInput d-flex justify-content-center align-items-center mb-5'
              onSubmit = {this.onSubmit}>
                <h4
                  className="my-0 mx-3">
                    {title}
                </h4>
                <button
                  type      ="button"
                  className ={`CategoryButton ${displayCatBtn} btn btn-outline-secondary mx-3 rounded-lg`}
                  // onClick   = {this.onClickBtn}
                  onClick   ={() => {this.onClickBtn(cats)}}
                  >
                    {this.state.categoryButton}
                </button>
                <input 
                  type      = "text" 
                  className = "NewNote mx-3 px-2 py-1 rounded-lg"
                  onChange  = {this.onValueChange}
                  value     = {this.state.text}
                  title=""
                  placeholder={`${placeholder}`}
                />
                <button
                  type      ="submit"
                  className ="AddButton btn btn-outline-secondary mx-3 rounded-lg"
                  /* onClick={}*/>
                    Добавить
                </button>
            </form>
        )
    }
}

export {Input};