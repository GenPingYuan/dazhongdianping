import React, { Component } from 'react';
import ToBack from '../ToBack';
import './style.sass'
class Head extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="head">
                <ToBack/>
                <div className="title">
                    {this.props.title}
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default Head;