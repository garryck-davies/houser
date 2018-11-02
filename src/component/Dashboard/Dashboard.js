import React, { Component } from "react";
import House from '../House/House';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        axios.get()
    }
    render() {
        const houses = this.state.houses.map((house, i) => {
           return <House key={ i } />
        })
        return (
            <div className="main-container">
                <div className='Dashboard'>Dashboard</div>
                <div className="btn-box">
                <Link to="/wizard" button className='btn'>Add New Property</Link>
                </div>
                <div className="house-link">
                <House />
                </div>
                </div>
        )
    }
}
