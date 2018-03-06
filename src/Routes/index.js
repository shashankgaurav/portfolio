import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Dashboard from "../Screens/Dashboard/Dashboard";
export const router = (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path = "/" component = {App}/> */}
            <Route exact path = "/" component = {Dashboard}/>
        </Switch>
    </BrowserRouter>
)