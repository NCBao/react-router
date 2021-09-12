import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Products from './Products';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';

const routes = [
    {
        path : '/',
        exact : true,
        component : () => <Home></Home>
    },
    {
        path : '/about',
        exact : false,
        component : () => <About></About>
    },
    {
        path : '/login',
        exact : false,
        component : ({location}) => <Login location={location}></Login>
    },
    {
        path : '/contact',
        exact : false,
        component : ({match}) => <Contact match={match}></Contact>
    },
    {
        path : '/products',
        exact : false,
        component : ({match, location}) => <Products match={match} location={location}></Products>
    },
    {
        path : '',
        exact : false,
        component : () => <NotFound></NotFound>
    },
]

class Routes extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <Switch>
                        {this.renderRoutes(routes)}
                    </Switch>
                </div>
            </div>
        );
    }

    renderRoutes = (routes) => {
        var result = null;

        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                >
                </Route>
            );
        });

        return result;
    }
}

export default Routes;