import React, { Component } from 'react';
import SearchInput from '../SearchInput';
import ToHome from '../ToHome';
import './style.sass'
class SearchHead extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="search-head">
                <ToHome/>
                <SearchInput/>
            </div>
        );
    }
}

export default SearchHead;