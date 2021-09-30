import React, { Component } from 'react'
import './Button.css'


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {type, nameOfClass, onClick} = this.props;
        return (
            <button
              type={type}
              className={`${nameOfClass}_Btn btn btn-outline-secondary rounded-lg mt-auto w-50 align-self-center`}
              onClick = {onClick}
              >
                Начать
            </button>
        )
    }
}

export {Button};