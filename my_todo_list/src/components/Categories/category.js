//@ts-check
import React, { Component } from 'react'
import './category.css'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let borderClass,
            generatedClass;
        const {nm, border} = this.props;
        border === 'left' ? borderClass = 'left' : borderClass = 'right' 
        generatedClass = `Category ${borderClass} w-100 d-flex justify-content-around align-items-center`
        return (
            <div
              className={generatedClass}>
                <h2 
                  className=''>{nm}</h2>
            </div>
        )
    }
}

export default Category;