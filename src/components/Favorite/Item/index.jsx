import React, { Component } from 'react';
import '../style.sass';
class Item extends Component {
    constructor(props){
        super(props); 
    }
    
 
    render() {
        let item = this.props.data;
        return (
            <div className="favorite-item" >
                <div className="img">
                    <img src={item.img} alt={item.title}/>
                </div>
                <div className="content">
                    <div className="title">{item.title}</div>
                    <div className="sub-title">{item.subTitle}</div>
                    <div className="price-info">
                        <div className="price">￥{item.price}</div>
                        <div className="safed">已售{item.safed}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;