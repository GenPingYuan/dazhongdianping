import React, { Component } from 'react';
import SearchHead from '../../components/SearchHead';
class Search extends Component {
    constructor(props){
        super(props);
    }

    
    componentWillMount() {
        console.log("==========")
        console.log(this.props.match.params);
    }
    
    render() {
        return (
            <div>
               <div>
                    <SearchHead/>
               </div>
            </div>
        );
    }
}

export default Search;