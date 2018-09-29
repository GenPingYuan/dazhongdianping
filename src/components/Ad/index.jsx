import React, { Component } from 'react';
import Prue from 'react-addons-pure-render-mixin';
import Img from '../Img';
import  './style.sass';

class Ad extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = Prue.shouldComponentUpdate.bind(this);
    }

     
    render() {
        return (
            <div className="ad">
                <div className="ad-desc">
                    {this.props.adTitle}
                </div>
                <div className="ad-list">
                    {
                        this.props.adData.map((item,index)=>{
                            return (
                                <div key={index} className="ad-item">
                                    <div className="ad-title" style={{...item.style}}>{item.title}</div>
                                    <div className="ad-sub-title">{item.subTitle}</div>
                                    <div className="ad-img">
                                        <Img src={item.img} alt={item.subTitle}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Ad;