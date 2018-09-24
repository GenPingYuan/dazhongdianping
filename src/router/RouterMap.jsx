import React from 'react';
import {Route ,BrowserRouter,Switch} from "react-router-dom";
import * as url from '../constants/url';
import App from '../containers/App';
import City from '../containers/City';
import Search from '../containers/Search';
import Detail from '../containers/Detail';
     


class RouterMap extends React.Component {
    constructor(props) {
        super(props);
        this.onRouterLevel = this.onRouterLevel.bind(this);
    }

    onRouterLevel() {
       console.log(111111);
    }

    render() {
        return (
            <BrowserRouter  basename="/" getUserConfirmation={this.onRouterLevel}> 
                <div>
                    <Switch >
                        <Route exact path={url.Home} component={App} />
                        <Route exact path={url.City} component={City}/>
                        <Route exact path={url.Search} component={Search}/>
                        <Route exact path={url.Detail} component={Detail}/>
                    </Switch>
                </div>
            </BrowserRouter>
            
        );
    }
}

export default RouterMap;