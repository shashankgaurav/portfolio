import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { firstAction } from "./Actions/firstAction/firstAction";

class App extends Component {

    componentWillMount = () => {
      this.props.firstAction();
    };
    

    render() {
        return(
            <div>
                <p>Hello React from App</p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ...bindActionCreators({ firstAction }, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(App);