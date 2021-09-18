import React, { Component } from 'react'
import './MainBodyContentList.css'


class MainBodyContentList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }
    render() {
        const {border, category, inputValue} = this.props;
        const ulClassName = `MainBodyContentList ${border} pt-4 w-50`;

        const liElements = 
                inputValue
                    .map((item) => {
                        const {label, id} = item;
                        return(
                            <li key = {id} className = "list-group-item">
                                {label}
                            </li>
                        )
                    })

        return (
            <ul
              className={ulClassName}>
                                                                                {/* <li */}
                                                                                {/* className=''> */}
                                                                                    {/* Hello, World !!! */}
                                                                                    {/* {category} */}
                                                                                {/* </li> */}
                {liElements}
            </ul>
        )
    }
}

export default MainBodyContentList;