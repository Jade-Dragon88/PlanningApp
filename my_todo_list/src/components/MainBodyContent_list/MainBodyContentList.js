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
    render() {
        let {cat, border, inputValue} = this.props;
        // console.log('inputValue');
        // console.log(inputValue);
        const listClassName = `MainBodyContentList ${border} pt-4 w-50`;
        cat === 'финансы' ? cat = false : cat = true;
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
                                const labelKey = `${id}_label`;
                                // let inputClass = "custom-checkbox";
                                return(
                                    // <li key={id} className={id}
                                    //     onClick={() => {console.log(label)}}>
                                    //     {label}
                                    // </li>
                                    <div>
                                        <input key={id}  
                                            type="checkbox"
                                            className="custom-checkbox"
                                            id={id} 
                                            name={id} 
                                            value="yes"
                                        />
                                        <label htmlFor={id}
                                            key={labelKey} 
                                            className={labelKey}
                                            onClick={this.changeInputClass}>
                                                {label}
                                        </label>
                                        {/* <button  */}
                                            {/* type="button"   */}
                                            {/* className="btn-trash btn-sm" */}
                                            {/* onClick={onDelete}/> */}
                                            {/* <i className="far fa-trash-o"></i> */}
                                        {/* </button> */}
                                    </div>
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