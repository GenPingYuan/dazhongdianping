import React from 'react';
import Prue from 'react-addons-pure-render-mixin';
import HomeHead from '../../components/HomeHead';
import Catagory from '../../components/Catagory';
import Ad from './subpage/AdPage';
import Favorite from './subpage/Favorite';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../actions/home';
import { connect } from 'react-redux';
import localStore from '../../util/localStore';
import './style.sass';
class Home extends React.Component {
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = Prue.shouldComponentUpdate.bind(this);
        this.state = {
            options: {
                mouseWheel: true,
                scrollbars: false,
                freeScroll: true,
                invertWheelDirection: true,
                momentum: false,
            },
            refreshOpions: {
                down: false,
            } 
        }
    }

    
    render() {
        return (
            <div className="home-page">
                {/* <Pull2Refresh {...this.state.refreshOpions} onRefresh={this.onRefresh}> */}
                    <HomeHead userInfo={this.props.userInfo}/>
                    <Catagory/>
                    <div style={{height: '0.625rem'}}></div>
                    <Ad/>
                    <div style={{height: '0.625rem'}}></div>
                    <Favorite userInfo={this.props.userInfo}/>
                {/* </Pull2Refresh> */}
            </div>
        );
    } 
}

function mapStateToProps(state) {
    // console.log("-=-=-=");
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(homeActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);