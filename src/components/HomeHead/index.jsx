import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import {City,Login} from '../../constants/url';
import SearchInput from '../SearchInput';
import Img from '../Img';
require('./style.sass');
class HomeHead extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="home-head">
                <div className="city-name">
                    <Link to={City}>
                        <span>{this.props.userInfo.cityName}</span>
                        <FontAwesome className="sort-down" name="sort-down"/>
                    </Link>
                </div>
                <SearchInput/>
                <div className="user-info">
                    {this.props.userInfo.username 
                        ? <Link to={Login}><Img src="headimage.jpg" /></Link>
                        : <Link to={Login}><FontAwesome name='user'/></Link>
                    }
                </div>
            </div>
        );
    }
}

export default HomeHead;