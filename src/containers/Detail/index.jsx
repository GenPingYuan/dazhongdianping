import React, { Component } from 'react';
import DetailHead from '../../components/DetailHead';
import DetailInfo from '../../components/DetailInfo';
import {getDetailById,getComments} from '../../mock/detail/detail';
import Comments from '../../components/Comments';
import {connect} from 'react-redux';
import * as collectAction from '../../actions/collect';
import { bindActionCreators } from 'redux';
import Collect from '../../components/Collect';
import './style.sass';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.addCollect = this.addCollect.bind(this);
        this.delCollect = this.delCollect.bind(this);
        this.initData = this.initData.bind(this);
        this.state = {
            data: {},
            comments: [],
            params: {},
            collected: false,
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

        this.initData()
        
    }

    initData() {
        const params = this.props.match.params;
        console.log(this.props.collectInfo);
        if(this.props.collectInfo.collects.length) {
            const result = this.props.collectInfo.collects.filter((item,i) => {
                return item.shopId == params.id
            })
             if(result.length) {
                 this.setState({
                    collected: true,
                 })
             }else {
                this.setState({
                    collected: false,
                 })
             }
         
        }else {
            this.setState({
                collected: false,
             })
         }
    }

    addCollect() {
        const params = this.props.match.params;
        this.props.collectActions.add(params.id,this.props.userInfo.username);
        this.initData();
    }

    delCollect() {
        console.log("deling...." + this.state.index);
        const params = this.props.match.params;
        this.props.collectActions.del(params.id,this.props.userInfo.username);
        this.initData();
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
                            <div className="collect-buy">
                                <div>
                                    <Collect collected={this.state.collected} add={this.addCollect} del={this.delCollect}/>
                                </div>
                                <div>

                                </div>
                            </div>
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

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        collectInfo: state.collectInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions : bindActionCreators(collectAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);