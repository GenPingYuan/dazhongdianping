import React, { Component } from 'react';
import DetailHead from '../../components/DetailHead';
import DetailInfo from '../../components/DetailInfo';
import {getDetailById,getComments} from '../../mock/detail/detail';
import Comments from '../../components/Comments';
import './style.sass';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.state = {
            data: {},
            comments: [],
            params: {}
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
                comments: res
            })
        })
    }
    
    loadMore(callback) {
        console.log(callback);
        const params = this.props.match.params;
        getComments(params.id).then((res) => {
            const comments = this.state.comments.concat(res);
            this.setState({
                comments
            })
            if(typeof callback == "function"){
                callback()
            }
        })
    }

    render() {
        return (
           
            <div className="detail-page">
                <DetailHead title="商品详情"/>
                <div className="detail-content">
                    {this.state.data.id ? 
                        <div>
                            <DetailInfo data={this.state.data}/>
                            
                            <div>用户评论</div>
                            {
                                this.state.comments.length ?
                                <Comments comments={this.state.comments} loadMore={this.loadMore}/>
                                : <div></div>
                            }
                        </div>
                        
                    : <div>loading....</div>}
                </div>
                
            </div>
        );
    }
}

export default Detail;