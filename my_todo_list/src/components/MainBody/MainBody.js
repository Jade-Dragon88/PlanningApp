import React, { Component } from 'react';
import './MainBody.css';

import Category from '../сategories/category';
import MainInput from '../MainInput/MainInput';
import MainBodyContent from '../MainBody_Content/MainBody_Content'

let nextId = () => {return Math.random().toString(36).substr(2, 7);};

class MainBody extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                {label: "!!! Going to learn React !!!", id:nextId()},
                // {label: "That is so good", id:nextId()},
                // {label: "I need a break...", id:nextId()}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(body){
        const newItem = {
                label:body,
                id: nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data:newArr
            };
        });
    }
    render() {
        const { data } = this.state;
        const inputValue = data;
        return (
            <div 
              className="MainBody">
                <MainInput checked = 'false'
                           onAdd={this.addItem}
                />
                <div
                  className="MainBody_Header d-flex justify-content-around align-items-center">
                    <Category nm="Финансы" border='right'/>
                    <Category nm="Личные"  border='left'/>
                </div>
                <MainBodyContent inputValue={inputValue}/>
            </div>
        );
    }
}

export default MainBody;