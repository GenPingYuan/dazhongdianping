import React, { Component,Fragment } from 'react';
import FontAwesome from 'react-fontawesome';
import Prue from 'react-addons-pure-render-mixin';
import './style.sass';

class CatagoryData extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = Prue.shouldComponentUpdate.bind(this);
        this.state = {
            pageSize: 8,
            page: 0,
        }
    }

    

    render() {
        return (
             
            <React.Fragment>
                { 
                     this.props.data.map((arr,index)=>{
                         let html = (
                            <div key={index} className="catagroy">
                                {
                                    arr.map((item,index)=>{
                                        return(
                                            <div key={item.id} className="catagroy-item">
                                                <div className="icon">
                                                    <FontAwesome name={item.icon}/>
                                                </div>
                                                <div className="description">{item.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            )
                        return html;
                    })
                }
                
            </React.Fragment>
        );
    }
}

export default CatagoryData;