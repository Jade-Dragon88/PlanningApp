import React, { Component } from "react";
import { ContentList as MainBodyContentList } from "../Content_list/ContentList";
import "./MainBody_Content.css";

class MainBodyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { inputValue, onDeleteItem, cats } = this.props;
    // console.log(inputValue);
    // let toFin='',toMe='';
    // if(type === 'финансы'){toFin=inputValue; toMe=''}
    // if(type==='личные'){toFin=''; toMe=inputValue}
    const contentLists = cats.map((item) => (
      <div className="w-50">
        <MainBodyContentList
          cat={item.label}
          // border = 'right'
          inputValue={inputValue}
          onDeleteItem={onDeleteItem}
          nameOfClass="MainBody"
          checkBox
        />
      </div>
    ));
    return (
      <div className="MainBodyContent d-flex justify-content-center w-100 mt-3">
        {/* @ts-ignore */}
        {/* <div className='w-50 right' border = 'right'>
                    <MainBodyContentList 
                        cat = 'Финансы' 
                        // border = 'right' 
                        inputValue = {inputValue}
                        onDeleteItem = {onDeleteItem}
                        nameOfClass = 'MainBody'
                        checkBox ={true}/>
                </div> */}
        {/* @ts-ignore */}
        {/* <div className='w-50 left' border = 'left'>
                    <MainBodyContentList 
                        cat = 'Личное'  
                        // border = 'left'  
                        inputValue = {inputValue}
                        onDeleteItem = {onDeleteItem}
                        nameOfClass = 'MainBody'
                        checkBox={true}/>
                </div> */}
        {contentLists}
      </div>
    );
  }
}
// eslint-disable-next-line
export { MainBodyContent };
