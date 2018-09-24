import React, { Component } from 'react';
import Ad from '../../../components/Ad';
import Prue from 'react-addons-pure-render-mixin';
import {getAdData} from '../../../mock/home/home'
class AdPage extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = Prue.shouldComponentUpdate.bind(this);
        this.state = {
             adData: [],
             adTitle: '超值特惠'
        }
    }

    componentWillMount() {
        //加载广告数据
        getAdData().then((res)=>{
            this.setState({
                adData: res
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.adData.length > 0 ? <Ad adData={this.state.adData} adTitle={this.state.adTitle}/> : ''
                }
            </div>
        );
    }
}

export default AdPage;