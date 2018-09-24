import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import {Home} from '../../constants/url';
import './style.sass';
class ToHome extends Component {
    render() {
        return (
            <div className="to-home">
                <Link to={Home}>
                    <FontAwesome  className="icon" name="chevron-left"/>
                </Link>
            </div>
        );
    }
}

export default ToHome;