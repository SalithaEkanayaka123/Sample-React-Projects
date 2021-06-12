import React, { Component } from 'react'
import axios from "axios";
import Select from 'react-select'

export class CreateCategory extends Component {
    constructor() {
        super();
        this.state = {
            name: " ",
            charges: 0,
            vehicles: [],
            selectedVehicle: [],
            options: []
        }
        this.SubmitPressed = this.SubmitPressed.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onVehicleSelect = this.onVehicleSelect.bind(this);
    }

    onVehicleSelect = (e) => {
        this.setState({selectedVehicle: e ? e.map(item =>  item.value) : []});
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitPressed = (e) => {
        e.preventDefault();
        const CategoryData = {
            name: this.state.name,
            charges: this.state.charges,
            vehicles: this.state.selectedVehicle
        }
        console.log(CategoryData);
        axios.post('http://localhost:8070/category/create', CategoryData)
            .then(response => {
                alert('Data saved successfully');
            })
            .catch(e => {
                console.log(e);
                alert(e.message);
            })

    }

    componentDidMount(){
        axios.get('http://localhost:8070/vehicle/')
            .then(response => {
                this.setState({ values: response.data.data }, () => {
                    let data = [];
                    this.state.values.map((item, index) => {
                        let categoires = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(categoires)
                    });
                    this.setState({ options: data });
                })
            })
    };
    render() {
        return (
            <div className= "container">
                <h1>Enter Category Details</h1>
                <form onSubmit = {this.SubmitPressed}>
                    <div className="mb-3">
                        <label htmlFor="name">Category Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Enter the Category name"
                            value={this.state.name}
                            style = {{width: '50dp'}}
                            onChange = {this.onChange}
                        />
                    </div>
                    <br/>

                    <div className="mb-3">
                        <label htmlFor="charges">Category Charges</label>
                        <input
                            type="Number"
                            className="form-control"
                            id="charges"
                            name="charges"
                            placeholder="Enter charges"
                            value={this.state.charges}
                            style = {{width: '50dp'}}
                            onChange = {this.onChange}
                        />
                    </div>
                    <br/>

                    <Select
                        className="basic-multi-select"
                        onChange={this.onVehicleSelect}
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

export default CreateCategory
