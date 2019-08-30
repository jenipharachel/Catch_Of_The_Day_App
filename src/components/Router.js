import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exactpath="/" />
                    <Route path="/store/`${storeName}`" />
                    <Route />
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Router;