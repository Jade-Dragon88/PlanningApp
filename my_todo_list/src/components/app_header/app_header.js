import React, { Component } from 'react';
import './app_header.css'

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {name} = this.props;
        return (
            <div className="AppHeader d-flex justify-content-center align-items-center">
                <h1 className="mt-0 mb-0">
                    {name}
                </h1>
            </div>
        )
    }
}

export default AppHeader;
