import React, { Component } from 'react';
import './MainHeader.css'

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {name} = this.props;
        return (
            <div className="MainHeader d-flex justify-content-center align-items-center">
                <h1 
                    className="mt-5 mb-5"
                    
                >
                    {name}
                </h1>
            </div>
        )
    }
}

export default MainHeader;
