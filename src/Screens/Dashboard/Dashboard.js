import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DashboardStyle.css';

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {

        return(
            <div className = "dashboard-container">
                <div className = "dashboard-header">
                    Hello React
                </div>
                <div className = "dashboard-footer">
                    <p>Hello React Footer</p>
                </div>
            </div>
        )
    }
}

export default Dashboard;