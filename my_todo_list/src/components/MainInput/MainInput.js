import React, { Component } from 'react'
import './MainInput.css'

class MainInput extends Component {
    constructor(props) {
        super(props);
        let {checked} = this.props;
        this.state = {
            checked: checked,
            text: '',
        }
        this.onClickBtn = this.onClickBtn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onClickBtn(){
        this.setState({
            checked: !this.state.checked,
        })
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
        let categoryButton;
        // let {checked} = this.props;
        this.state.checked ? categoryButton = 'Олег': categoryButton = 'Вера';
        return (
            <form
              className='MainInput d-flex justify-content-center align-items-center mb-5'
              onSubmit = {this.onSubmit}>
                <h4
                  className="my-0 mx-3">
                    Новый пункт
                </h4>
                <button
                  type      ="button"
                  className ="CategoryButton btn btn-outline-secondary mx-3"
                  onClick   = {this.onClickBtn}>
                    {categoryButton}
                </button>
                <input 
                  type      = "text" 
                  className = "NewNote mx-3 px-2 py-1"
                  onChange  = {this.onValueChange}
                  value     = {this.state.text}
                />
                <button
                  type      ="submit"
                  className ="AddButton btn btn-outline-secondary mx-3"
                  /* onClick={}*/>
                    Добавить
                </button>
            </form>
        )
    }
}

export default MainInput;