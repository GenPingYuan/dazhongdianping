import React, { Component } from 'react';
import {getCityData} from '../../../mock/city';
import './style.sass';
import localStore from '../../../util/localStore';
class CityList extends Component {
    constructor(props){
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            cityData: []
        }
    }
    
    componentWillMount() {
        getCityData()
        .then((data)=>{
            this.setState({
                cityData: data
            })
        })
    }
    
    update(cityName){
        //e.preventDefault();
        //console.log(e);
        console.log(cityName);
        this.props.update({cityName});
        // localStore.setItem("cityName",cityName);
    }

    render() {
        return (
            <div className="city-module">
                <div className="city-title">城市列表</div>
                <div style={{height: "10px"}}></div>
                <div className="city-list">
                    {this.state.cityData.map((item,index)=>{
                        return (<button key={index} className="city-item" onClick={() => this.update(item.name)} >
                                    {item.name} 
                                </button>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default CityList;