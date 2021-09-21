import React, { Component } from 'react'
import './MainBodyContentList.css'


class MainBodyContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // labelClass : `${this.props.inputValue.id}_label`
        }
        this.changeInputClass = this.changeInputClass.bind(this);
    }
    changeInputClass() {
        // console.log(arguments);
    }
    // onDeleteItem(){

    // }
    render() {
        let {cat, border, inputValue, onDeleteItem } = this.props;
        // console.log('inputValue');
        // console.log(inputValue);
        const listClassName = `MainBodyContentList ${border} pt-4 w-50`;
        cat === 'Вера' ? cat = false : cat = true;
        // console.log('category');
        // console.log(cat);
        // console.log('n');
        // console.log(n);
        let liElements;
        // if(inputValue[n] && (cat == inputValue[n].cat)){
        if(inputValue[0]){
            liElements =  inputValue
                            .filter(item => item.cat === cat)
                            .map((item) => {
                                const {label, id} = item;
                                // console.log(label);
                                const inputKey = `${id}_input`
                                // const inputId = 
                                const labelKey = `${id}_label`;
                                const deleteItemKey = `${id}_delete`
                                // let inputClass = "custom-checkbox";
                                return(
                                    // <li key={id} className={id}
                                    //     onClick={() => {console.log(label)}}>
                                    //     {label}
                                    // </li>
                                    <p className="ItemContainer d-flex align-items-center"
                                        key={id}
                                        id={id}>
                                        <input key={inputKey}  
                                            type="checkbox"
                                            className="custom-checkbox"
                                            id={inputKey} 
                                            name={inputKey} 
                                            value="yes"
                                        />
                                        <label htmlFor={inputKey}
                                            key={labelKey} 
                                            className='flex-grow-1'
                                            id={labelKey}
                                            onClick={this.changeInputClass}>
                                                {label}
                                        </label>
                                        <button
                                            key={deleteItemKey}
                                            type="button"
                                            className="DeleteItem btn-trash btn-sm "
                                            id={deleteItemKey}
                                            // onClick={() => {console.log('Удалил!!!')}}
                                            onClick={()=> {onDeleteItem(id)}}
                                            >
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </p>
                                )
                            })
            // console.log(`++++++++++`);
            // console.log('liElements');
            // console.log(liElements);
        }
        // else{
        //     console.log(`----------`);
        // }        
        return (
            <div
                className={listClassName}>
            {/* <ul */}
            {/*   className={listClassName}> */}
                {liElements}
            {/*</ul> */}
            </div>
        )
    }
}

export default MainBodyContentList;