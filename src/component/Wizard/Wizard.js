import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class Wizard extends Component {
    constructor() {
        super();

    this.state = {
        propertyName: 'name',
        address: 'address',
        city: 'city',
        State: 'state',
        zip: 0
    }

        this.handlePropertyName = this.handlePropertyName.bind(this)
    }
    
    handlePropertyName(e){
        this.setState({
            propertyName: e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    } 

    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleState = (e) => {
        this.setState({
            State: e.target.value
        })
    }
    handleZip = (e) => {
        this.setState({
            zip: e.target.value
        })

    }



    render() {


        return (
        
            <div className='Wizard'>
                <Link to="/" button className='btn'>Cancel</Link>
                <div>Add New Listing</div>
                    <p className="form-wrap">
                        <input className="btn-sp" placeholder="Property Name" onChange={ (e) => this.handlePropertyName(e) }/>
                            
                        <input className="btn-sp" placeholder="Address" ref={
                            address => {
                                this.address = address;
                            }} onChange={ (e) => this.handleAddress(e)}
                            />
                        <input className="btn-sp" placeholder="City" ref={
                            city => {
                                this.city = city;
                            }} onChange={ (e) => this.handleCity(e)}
                            />
                        <input className="btn-sp" placeholder="State" ref={
                            State => {
                                this.State = State;
                            }} onChange={ (e) => this.handleState(e)}
                            />
                        <input className="btn-sp" placeholder="Zip" ref={
                            zip => {
                                this.zip = zip;
                            }} onChange={ (e) => this.handleZip(e)}
                            />
                    </p>
                    <button>Complete</button>
            </div>
        )
    }
}