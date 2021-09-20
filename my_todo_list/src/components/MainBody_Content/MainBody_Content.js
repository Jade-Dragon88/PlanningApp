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
        // let toFin='',toMe='';
        // if(type === 'финансы'){toFin=inputValue; toMe=''}
        // if(type==='личные'){toFin=''; toMe=inputValue}
        return (
            <div
              className='MainBodyContent d-flex justify-content-center w-100'>
                <MainBodyContentList cat = 'финансы' border = 'right' inputValue = {inputValue}/>
                <MainBodyContentList cat = 'личные'  border = 'left'  inputValue = {inputValue}/>
            </div>
        )
    }
}

export default MainBodyContent;