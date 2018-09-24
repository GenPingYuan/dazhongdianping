import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {withRouter } from 'react-router-dom';
import './style.sass';
class ToBack extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="to-back">
                    <FontAwesome  className="icon" name="chevron-left" onClick={this.goBack}/>
            </div>
        );
    }
}

export default withRouter(ToBack);