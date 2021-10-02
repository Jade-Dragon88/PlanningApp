import React, { Component } from 'react'
import './AddCategories.css'
import { Header as AddCategoriesHeader } from "../Header/Header"
import { Input as AddCategoriesInput } from '../Input/Input'
import { ContentList as AddCategoriesContentList }from '../Content_list/ContentList'
import { Button as AddCategoriesButton } from '../Button/Button'


// let AddCategoriesHeader      = Header,
//     AddCategoriesInput       = Input,
//     AddCategoriesContentList = MainBodyContentList,
//     AddCategoriesButton      = Button;

let nextId = () => {return Math.random().toString(36).substr(2, 7);};
let displayAddCategoriesForm = 'd-flex';

class AddCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[]
        }
        this.addCat = this.addCat.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    addCat(){
        const newItem = {
            cat:!arguments[0],
            label:arguments[1],
            id: nextId()
        };
        // console.log(newItem);
        this.setState(
            ({categories})=> {
                const newArr = [...categories, newItem];
                return {
                    categories: newArr
                };
            }   
        )
    
        // console.log(this.state.categories);
    }
    onSubmit(){
      // console.log('@@@@@@@@@@');
      let {setCat} = this.props;
      setCat(this.state['categories'])
      // displayAddCategoriesForm = 'd-none';
      console.log(document.querySelector('.AddCategories'));
      document.querySelector('.AddCategories').classList.add('d-none');
    };
    render() {
        console.log(this.state.categories);
        // const {setCat} = this.props;
        return (
            <div
              className={`AddCategories position-absolute w-100 vh-100 ${displayAddCategoriesForm} justify-content-center align-items-center`}>
                <div
                  className='AddCategoriesContant d-flex flex-column p-5 rounded-lg'
                  >
                    <AddCategoriesHeader 
                        name="Добро пожаловать"
                        margin='mb-5'
                    />
                    <AddCategoriesInput 
                        checked = {false}
                        onAdd={this.addCat}
                        title='Новая категория'
                        displayCatBtn={false}
                        placeholder='Добавьте новую категорию'
                    />
                    <AddCategoriesContentList
                        cat={true}
                        inputValue = {this.state.categories}
                        onDeleteItem={()=>{console.log('1')}}
                        nameOfClass = 'AddCategories'
                        checkBox={false}
                    />
                    <AddCategoriesButton
                        type="submit"
                        nameOfClass='AddCategories'
                        onClick = {this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

export default AddCategories;