import React, { Component } from 'react'
import './AddCategories.css'
import Header from '../Header/Header'
import Input from '../Input/Input'

class AddCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        // this.addCat = this.addCat.bind(this);
    }
    render() {
        return (
            <div
              className='AddCategories position-absolute w-100 vh-100 d-flex justify-content-center align-items-center'>
                <div
                  className='AddCategoriesContant p-5 h-50 rounded-lg'>
                    <Header name="Добро пожаловать"
                            margin='mb-5'
                    />
                    <Input checked = {false}
                           onAdd={this.props.addCat}
                           title='Новая категория'
                           displayCatBtn={false}
                           placeholder='Добавьте новую категорию'
                    />
                </div>
            </div>
        )
    }
}

export default AddCategories;