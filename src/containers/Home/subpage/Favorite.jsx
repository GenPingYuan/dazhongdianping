import React, { Component } from 'react';
import Prue from 'react-addons-pure-render-mixin';
import {withRouter } from 'react-router-dom';
import {getFavicoty} from '../../../mock/home/home';
import pathUtil from '../../../util/path';
import {Detail} from '../../../constants/url';
import Item from '../../../components/Favorite/Item';
import ListViewAnt from '../../../frame/ListViewAnt';
import './style.sass';

class Favorite extends Component {
    constructor(props,context) {
        super(props);
        this.shouldComponentUpdate = Prue.shouldComponentUpdate.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.getData = this.getData.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            page: 1,
            refreshOpions: {
                down: false,
            } 
        }
    }
    
    showDetail(item) {
        
        const path = pathUtil.setParams(Detail,[encodeURIComponent(item.id),encodeURIComponent(item.title)]);
        console.log(path);
        this.props.history.push(path);
    }

    render() {
        const item = (item, sectionID, rowID) => {
            return (
                <div key={rowID} onClick={() => this.showDetail(item)}>
                    <Item  data={item}/>
                </div>
                
            )
        }

       
        return (
            <div>
                
                    {this.state.hasMore  ? 
                        <div>
                            <div className="favorite-title">
                                猜你喜欢
                            </div>
                            <div style={{height: '10px'}}></div>
                            {/* <FavoriteComponent data={this.state.data}/> */}
                            <ListViewAnt 
                                dataSource={this.state.data} 
                                renderRow={item}
                                hasPullToRefresh="true"
                                loadMore={this.loadMore}
                            />
                        </div>
                    : '加载中......'}
            </div>
        );
    }
    
    componentWillMount() {
        //获取数据
        this.getData();
    }

    loadMore(callback) {
        this.getData(callback);
    }

    //获取首页数据
    getData(callback) {
        getFavicoty(this.props.userInfo.cityName,this.state.page)
        .then((res) => {
            if(res.length == 0) return;
            const data = this.state.data.concat(res[0].data);
            // console.log(this.state.data);//
            this.setState({
                data: data,
                hasMore: true
            })
            if(typeof callback == "function"){
                callback()
            }
        });
    }
}

export default withRouter(Favorite);
