import React, { Component } from 'react';
import DetailHead from '../../components/DetailHead';
import DetailInfo from '../../components/DetailInfo';
import {getDetailById,getComments} from '../../mock/detail/detail';
import Comments from '../../components/Comments';
import {connect} from 'react-redux';
import * as collectAction from '../../actions/collect';
import * as shopCarAction from '../../actions/shopCar';
import { bindActionCreators } from 'redux';
import Collect from '../../components/Collect';
import Buy from '../../components/Buy';
import './style.sass';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.addCollect = this.addCollect.bind(this);
        this.delCollect = this.delCollect.bind(this);
        this.initData = this.initData.bind(this);
        this.checkCollect = this.checkCollect.bind(this);
        this.buy = this.buy.bind(this);
        this.state = {
            params: {},
            data: {},
            comments: [],
            params: {},
            collected: false,
            buyNum: 0
        }
    }

    
    componentWillMount() {
        /**
         * 获取商品数据
         */
        getDetailById(this.props.match.params.id).then((res) => {
            this.setState({
                data: res
            })
        });
        /**
         * 获取评价数据
         */
        getComments(this.props.match.params.id).then((res) => {
            this.setState({
                comments: res
            })
        })

        this.initData()
        
    }

    initData() {
        //判断是否已经收藏
        this.checkCollect();
        this.checkBuyed();
    }

    /**
     * 判断是否已经购买过了
     */
    checkBuyed () {
        if(this.props.shopCarInfo.length) {
            const result = this.props.shopCarInfo.filter((item,index) => {
                return item.shopId == this.props.match.params.id
            })

            if(result.length) {
                this.setState({
                    buyNum: result[0].num
                })
            }
        }
    }

    /**
     * check collect
     */

    checkCollect(){
        console.log("--------------------");
        console.log(typeof(this.props.collectInfo));
        if(this.props.collectInfo.length) {
            const result = this.props.collectInfo.filter((item,i) => {
                return item.shopId == this.props.match.params.id
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

    /**
     * 添加到收藏
     */
    addCollect() {
        
        this.props.collectActions.add(this.props.match.params.id,this.props.userInfo.username);
        this.initData();
    }

    /**
     * 从收藏列表中移除
     */
    delCollect() {
        console.log("deling...." + this.state.index);
        
        this.props.collectActions.del(this.props.match.params.id,this.props.userInfo.username);
        this.initData();
    }

    /**
     * 购买商品
     */
    buy() {
        this.props.shopCarActions.add(this.props.match.params.id);
        this.initData();
    }
    
    loadMore(callback) {
        console.log(callback);
        getComments(this.props.match.params.id).then((res) => {
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
                                    <Buy buyNum={this.state.buyNum} add={this.buy}/>
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
        collectInfo: state.collectInfo,
        shopCarInfo: state.shopCarInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions : bindActionCreators(collectAction,dispatch),
        shopCarActions : bindActionCreators(shopCarAction,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);