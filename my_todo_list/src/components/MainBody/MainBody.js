import React, { Component } from 'react';
import './MainBody.css';

import Category from '../Categories/category';
import MainInput from '../MainInput/MainInput';
import MainBodyContent from '../MainBody_Content/MainBody_Content'

let nextId = () => {return Math.random().toString(36).substr(2, 7);};

class MainBody extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                // {label: "!!! Going to learn React !!!", id:nextId()},
                // {label: "That is so good", id:nextId()},
                // {label: "I need a break...", id:nextId()}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }
    addItem(){
        // console.log(arguments[1]);
        const newItem = {
                cat:arguments[0],
                label:arguments[1],
                id: nextId()
        }
        // console.log(newItem);
        // console.log(this.state);
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            // console.log(newArr);
            return {
                data: newArr
            };
        });
    }
    render() {
        const { data } = this.state;
        // console.log(`____render____`);
        // const inputValue = data;
        // console.log(inputValue);
        return (
            <div 
              className="MainBody">
                <MainInput checked = {false}
                           onAdd={this.addItem}
                />
                <div
                  className="MainBody_Header d-flex justify-content-around align-items-center">
                    <Category nm="Финансы" border='right'/>
                    <Category nm="Личные"  border='left'/>
                </div>
                <MainBodyContent inputValue={data}/>
            </div>
        );
    }
}

export default MainBody;