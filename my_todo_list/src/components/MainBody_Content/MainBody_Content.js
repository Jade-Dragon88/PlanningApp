import React, { Component } from 'react'
import MainBodyContentList from '../MainBodyContent_list/MainBodyContentList'
import './MainBody_Content.css'

class MainBodyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { inputValue, onDeleteItem } = this.props;
        // console.log(inputValue);
        // let toFin='',toMe='';
        // if(type === 'финансы'){toFin=inputValue; toMe=''}
        // if(type==='личные'){toFin=''; toMe=inputValue}
        return (
            <div
              className='MainBodyContent d-flex justify-content-center w-100 mt-3'>
                <div className='w-50 right' border = 'right'>
                    <MainBodyContentList 
                        cat = 'Финансы' 
                        // border = 'right' 
                        inputValue = {inputValue}
                        onDeleteItem = {onDeleteItem}
                    />
                </div>
                <div className='w-50 left' border = 'left'>
                    <MainBodyContentList 
                        cat = 'Личное'  
                        // border = 'left'  
                        inputValue = {inputValue}
                        onDeleteItem = {onDeleteItem}
                    />
                </div>
                
            </div>
        )
    }
}

export default MainBodyContent;