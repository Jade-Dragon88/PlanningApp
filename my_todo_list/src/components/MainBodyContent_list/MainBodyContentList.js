import React, { Component } from 'react'
import './MainBodyContentList.css'


class MainBodyContentList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }
    render() {
        let {cat, border, inputValue, n} = this.props;
        console.log('inputValue');
        console.log(inputValue);
        const ulClassName = `MainBodyContentList ${border} pt-4 w-50`;
        // switch (cat) {
        //     case 'финансы':
        //         cat = false;
        //         break;
        //     case 'личные':
        //         cat = true;
        //         break;
        //     default: break;
        // }
        cat === 'финансы' ? cat = false : cat = true;
        console.log('category');
        console.log(cat);
        console.log('n');
        console.log(n);
        let liElements;
        // if(inputValue[n] && (cat == inputValue[n].cat)){
            if(inputValue[0]){
            liElements =  inputValue
                            .filter(item => item.cat === cat)
                            .map((item) => {
                                const {label, id} = item;
                                // console.log(id);
                                return(
                                    <li key={id} className={id}>
                                        {label}
                                    </li>
                                )
                            })
            console.log(`++++++++++`);
        }
        else{
            console.log(`----------`);
        }
        // const liElements = 
        //         inputValue
        //             .map((item) => {
        //                 const {label, id} = item;
        //                 console.log(id);
        //                 return(
        //                     <li key={id} className={id}>
        //                         {label}
        //                     </li>
        //                 )
        //             })
        
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