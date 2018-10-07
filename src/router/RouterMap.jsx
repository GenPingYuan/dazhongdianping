import React from 'react';
import {Route,Switch,HashRouter} from "react-router-dom";
import * as url from '../constants/url';
import App from '../containers/App';
import City from '../containers/City';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import UserCenter from '../containers/UserCenter';
import Collects from '../containers/Collects';
import ShoppingCart from '../containers/ShoppingCart';
class RouterMap extends React.Component {
    constructor(props) {
        super(props);
    }

    
    componentWillMount() {
        // console.log(url);
        // console.log("uzi");
    }
    
    render() {
        return (
            <HashRouter  basename={url.Home}> 
                <div>
                    <Switch >
                        <Route exact path={url.Home} component={App} />
                        <Route exact path={url.City} component={City}/>
                        <Route exact path={url.Search} component={Search}/>
                        <Route exact path={url.Detail} component={Detail}/>
                        <Route exact path={url.Login} component={Login}/>
                        <Route exact path={url.UserCenter} component={UserCenter}/>
                        <Route exact path={url.Collects} component={Collects}/>
                        <Route exact path={url.ShoppingCart} component={ShoppingCart}/>
                    </Switch>
                </div>
            </HashRouter>
            
        );
    }
}

export default RouterMap;