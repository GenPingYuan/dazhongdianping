import React  from 'react';
import Prue from 'react-addons-pure-render-mixin';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import localStore from '../util/localStore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../actions/home';
class App extends React.Component {
    constructor(props,context){
        super(props,context);
        this.shouldComponentUpdate = Prue.shouldComponentUpdate.bind(this);
       
    }

    componentWillMount(){
        let cityName = localStore.getItem("cityName");
        
        if(!cityName) {
            cityName = "南昌";
        }

        this.props.userInfoActions.update({
            cityName
        })
    }

    render() {
        return (
            // <Router>
                <div>
                    <div> </div>
                    <Home/>
                    <div></div>
                </div>
            // </Router>
        );
    }
}

function  mapStateToProps(state)  {
    return {
        
    }
}
 

function  mapDispatchToProps(dispatch) {
 return {
     userInfoActions: bindActionCreators(homeActions,dispatch)
 }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);