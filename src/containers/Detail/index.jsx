import React, { Component } from 'react';
import DetailHead from '../../components/DetailHead';
import DetailInfo from '../../components/DetailInfo';
import {getDetailById,getComments} from '../../mock/detail/detail';
import './style.sass';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            comment: []
        }
    }

    
    componentWillMount() {
        const params = this.props.match.params;
        getDetailById(params.id).then((res) => {
            this.setState({
                data: res
            })
        });

        getComments(params.id).then((res) => {
            this.setState({
                comment: res
            })
        })
    }
    

    render() {
        console.log("start---------");
        console.log(this.state.data);
        return (
           
            <div className="detail-page">
                <DetailHead title="商品详情"/>
                <div className="detail-content">
                    {this.state.data.id ? 
                        <DetailInfo data={this.state.data}/> 
                    : <div>loading....</div>}
                </div>
                
            </div>
        );
    }
}

export default Detail;