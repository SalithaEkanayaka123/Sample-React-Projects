import React, { Component, useState } from 'react'
import axios from "axios";

export class createSubject extends Component {
    //

    constructor() {
        super();
        this.state = {
            name: " ",
            description: " ",
            amount: 0
        }
        this.SubmitPressed = this.SubmitPressed.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitPressed = (e) => {
        e.preventDefault();
        const Data = {
            name: this.state.name,
            description: this.state.description,
            amount: this.state.amount
        }
        console.log(Data);
        axios.post('http://localhost:8070/subject/create', Data)
            .then(response => {
                alert('Data saved successfully');
            })
            .catch(e => {
                console.log(e);
                alert(e.message);
            })

    }
    render() {
        return (
            <div className= "container">
                <h1>Create subject</h1>
                <form onSubmit = {this.SubmitPressed}>
                        <div className="form-group">
                            <label htmlFor="name">Subject Name</label>
                            <input type="text"
                                   className="form-control"
                                   value={this.state.name}
                                    id="name"
                                   name="name"
                                   placeholder="Enter the name" style = {{width: '50dp'}}
                                    onChange = {this.onChange}
                            />
                        </div>
                        <br/>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="Enter the description"
                                value={this.state.description}
                                style = {{width: '50dp'}}
                                onChange = {this.onChange}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="name">Amount</label>
                            <input type="number"
                                   className="form-control"
                                   id="amount"
                                   name="amount"
                                   placeholder="amount"
                                   value={this.state.amount}
                                   style={{width: '50dp'}}
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

export default createSubject
