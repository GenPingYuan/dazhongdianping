import React, { Component } from 'react';
import Item from './Item';
import './style.sass';
class Favorite extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="favorite-list">
                {this.props.data.map((item,index)=>{
                    return <Item key={index} data={item}/>
                })}
            </div>
        );
    }
}

export default Favorite;