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
        this.getConfirmation = this.getConfirmation.bind(this);
    }

    
    componentWillMount() {
        console.log("uzi");
    }
    
    getConfirmation(){
        const allowTransition = window.confirm("message")
    }

    render() {
        return (
            <BrowserRouter  basename="/"
                            > 
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