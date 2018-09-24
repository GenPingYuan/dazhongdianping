import React, { Component } from 'react';
import ToHome from '../ToHome';
import './style.sass'
class Head extends Component {
    render() {
        return (
            <div className="head">
                <ToHome/>
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