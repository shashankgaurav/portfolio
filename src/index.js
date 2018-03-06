import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux';
import store from "./Configurations/configureStore";
import { router } from "./Routes/index";

ReactDOM.render(
    <Provider store = {store}>
        { router }
    </Provider>, 
    document.getElementById('root')
)