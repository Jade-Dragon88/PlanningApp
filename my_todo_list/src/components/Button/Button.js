import React, { Component } from 'react'
import './Button.css'


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {nameOfClass} = this.props;
        return (
            <button
              type="button"
              className={`${nameOfClass}_Btn btn btn-outline-secondary rounded-lg mt-auto w-50 align-self-center`}>
                Начать
            </button>
        )
    }
}

export {Button};