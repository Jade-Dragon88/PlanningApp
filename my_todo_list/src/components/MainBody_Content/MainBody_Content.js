import React, { Component } from 'react'
import MainBodyContentList from '../MainBodyContent_list/MainBodyContentList'

class MainBodyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { inputValue } = this.props;
        // console.log(inputValue);
        let toFin='',toMe='';
        // if(type === 'финансы'){toFin=inputValue; toMe=''}
        // if(type==='личные'){toFin=''; toMe=inputValue}
        return (
            <div
              className='MainBodyContent d-flex justify-contenet-center w-100'>
                <MainBodyContentList cat = 'финансы' border = 'right' inputValue = {inputValue} n='0'/>
                <MainBodyContentList cat = 'личные'  border = 'left'  inputValue = {inputValue} n='1'/>
            </div>
        )
    }
}

export default MainBodyContent;