import React, { Component } from 'react';
import './style.sass';
import ReactSwipe from 'react-swipe';
import CatagoryData from './CatagoryData';
import {getCatagory} from '../../mock/home/home';
class Catagory extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageCount: 0,
            nowPage: 1,
        }
    }

    
    componentWillMount() {
        /**
         * 加载相关数据
         */
        let data;
        getCatagory().then((res)=>{
            data = res;
            let pageCount = data.length;
            this.setState({
                data,
                pageCount
            })
        });
        
    }
    

    render() {
        let roundIndex = ()=>{
            let html = [];
            for (let index = 0; index < this.state.pageCount; index++) {
               html.push(
                    <div key={index} className={index + 1 == this.state.nowPage ? "round-index round-index-selected" : "round-index"}>
                        
                    </div>
                )
            }
            return html;
        }
        /**
         * 轮播配置
         */
        let opt = {
            continuous: false,
            callback: (index) => {
                this.setState({
                    nowPage: index + 1
                })
            }
        }
        if(this.state.pageCount) {
            return (
                <div className="carousel-list">
                    <ReactSwipe className="carousel" swipeOptions={opt}>
                        <CatagoryData data={this.state.data}/>
                    </ReactSwipe>
                    <div className="indexFlag">
                        <div className="round-list">
                            {
                                roundIndex()
                            }
                        </div>
                    </div>
                </div>
            );
        }else {
            return (
                <div>加载中。。。。。。</div>
            )
        }
    }
    /**小圆点的个数 */
    updatePageCount = (page)=>{
        this.setState({
            pageCount: page
        })
    }
}

export default Catagory;