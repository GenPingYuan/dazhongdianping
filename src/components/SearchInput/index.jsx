import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import {Search} from '../../constants/url';
import pathUtil from '../../util/path';
import FontAwesome from 'react-fontawesome';
import './style.sass';
class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            keyword: ""
        }
    }

    
    componentWillMount() {
        
    }
    
    handler(e) {
        this.setState({
            keyword: e.target.value
        })
    }

    submit(e) {
        // console.log(this.state.keyword.trim().length);
        if(e.keyCode !== 13) {
            return 
        }
        if(!this.state.keyword.trim().length) {
            return;
        }
        const path = pathUtil.setParams(Search,["all",encodeURIComponent(this.state.keyword)]);
        // console.log(path);
        this.props.history.push(path);
    }

    render() {
        return (
            <div  className="search">
                <FontAwesome className="search-icon" name="search"/>
                <input type="text" name="search" id="search" placeholder="请输入关键字" 
                       autoComplete="FALSE"
                       onChange={this.handler} 
                       onKeyUp={this.submit}/>
            </div>
        );
    }
}

export default withRouter(SearchInput);