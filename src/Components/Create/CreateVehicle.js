import React, { Component } from 'react'
import axios from "axios";
import Select from 'react-select'

export class CreateVehicle extends Component {
    constructor() {
        super();
        this.state = {
            code: " ",
            model: " ",
            type: " ",
            name: " ",
            category: [],
            selectedCategory: [],
            options: [],
        }
        this.SubmitPressed = this.SubmitPressed.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCategorySelect = this.onCategorySelect.bind(this);
    }

    onCategorySelect = (e) => {
        this.setState({selectedCategory: e ? e.map(item =>  item.value) : []});
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
            name: this.state.name,
            category: this.state.selectedCategory
        }
        console.log(VehicleData);
        axios.post('http://localhost:8070/vehicle/create', VehicleData)
            .then(response => {
                alert('Data saved successfully');
            })
            .catch(e => {
                console.log(e);
                alert(e.message);
            })

    }

    componentDidMount(){
        axios.get('http://localhost:8070/category/')
            .then(response => {
                console.log(response.data.data);
                this.setState({ values: response.data.data }, () => {
                    let data = [];
                    this.state.values.map((item, index) => {
                        console.log(item.name);
                        let categoires = {
                            value: item._id,

                            label: item.name
                        }
                        console.log(item.name);
                        data.push(categoires)
                    });
                    this.setState({ options: data });
                })
            })
    };
    render() {
        return (
            <div className= "container">
                <h1>Enter Vehicle Details</h1>
                <form onSubmit = {this.SubmitPressed}>
                        <div className="mb-3">
                            <label htmlFor="code">Vehicle Code</label>
                            <input type="text"
                                   className="form-control"
                                   value={this.state.code}
                                    id="code"
                                   name="code"
                                   placeholder="Enter the code" style = {{width: '50dp'}}
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
                        <Select
                            className="basic-multi-select"
                            onChange={this.onCategorySelect}
                            isMulti
                            options = {this.state.options }
                        />
                        <br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            
        </div>
        )
    }
}

export default CreateVehicle
