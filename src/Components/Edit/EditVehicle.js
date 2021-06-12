import React, { Component, useState } from 'react'
import axios from "axios";
import Select from "react-select";

export class EditVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            code: " ",
            model: " ",
            type: " ",
            name: " ",
        }
        this.SubmitPressed = this.SubmitPressed.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitPressed = (e) => {
        e.preventDefault();
        const VehicleData = {
            code: this.state.code,
            model:this.state.model,
            type: this.state.type,
            name: this.state.name
        }
        console.log(VehicleData);
        axios.post('http://localhost:8070/vehicle/update/' + this.state.id, VehicleData)
            .then(response => {
                alert('Data updated successfully');
                window.location = '/display-vehicle';
            })
            .catch(e => {
                console.log(e);
                alert(e.message);
            })

    }
    componentDidMount(){
        axios.get("http://localhost:8070/vehicle/singleElement/"+this.state.id)
            .then(response => {
                let values = response.data.data;
                console.log(values);
                this.setState({
                    code: values.code,
                    model: values.model,
                    type: values.type,
                    name: values.name,
                });
            });
    }
    render() {
        return (
            <div className= "container">
                <h1>Edit Vehicle Details</h1>
                <form onSubmit = {this.SubmitPressed}>
                    <div className="mb-3">
                        <label htmlFor="code">Vehicle Code</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.code}
                               id="code"
                               name="code"
                               placeholder="Enter the code"
                               onChange = {this.onChange}
                        />
                    </div>
                    <br/>

                    <div className="mb-3">
                        <label htmlFor="model">Vehicle Model</label>
                        <input
                            type="text"
                            className="form-control"
                            id="model"
                            name="model"
                            placeholder="Enter the model"
                            value={this.state.model}
                            style = {{width: '50dp'}}
                            onChange = {this.onChange}
                        />
                    </div>
                    <br/>
                    <div className="mb-3">
                        <label htmlFor="type">Vehicle type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="type"
                            name="type"
                            placeholder="Enter the vehicle type"
                            value={this.state.type}
                            style = {{width: '50dp'}}
                            onChange = {this.onChange}
                        />
                    </div>
                    <br/>
                    <div className="mb-3">
                        <label htmlFor="name">Vehicle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter the vehicle name"
                            value={this.state.name}
                            style = {{width: '50dp'}}
                            onChange = {this.onChange}
                        />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}

export default EditVehicle
