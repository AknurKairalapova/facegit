import {React, Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {PrivateRoute} from '../PrivateRoute';
import {AuthPage} from '../AuthPage';
import {UserPage} from '../UserPage';

export default class AppRouter extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <PrivateRoute path="/user/:name" component={UserPage} />
                    <Route path="/login" component={AuthPage} />
                    <Redirect to="/user/dex157" />
                </Switch>
            </div>
        );
    }
}