import React, { Component } from 'react';
import Head from '../../components/Head';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../actions/home';
import CityList from './subpage/CityList';
import './style.sass'
class City extends Component {
    constructor(props){
        super(props);
    }
    render() {

        // console.log(width);
        // console.log(height);
        return (
            <div className="city-page">
                <Head title="城市"/>
                <div className="now-city">
                    {this.props.userInfo.cityName}
                </div>
                <CityList update={this.props.userInfoActions.update}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(homeActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City);;