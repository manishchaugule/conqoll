import React from 'react';
import Home from '../src/screen/home';
import { Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
            <Switch>
                <Route path="/" render={props => {
                    return <Home {...props}/>
                }} exact />
            </Switch>
    );
}   