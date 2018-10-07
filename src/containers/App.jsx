import React  from 'react';
import Prue from 'react-addons-pure-render-mixin';
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
        console.log("app.jsx");
        let cityName = this.props.userInfo ? this.props.userInfo.cityName : " 南昌";
        
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
        userInfo: state.userInfo
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