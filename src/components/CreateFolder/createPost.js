import React, { Component, useState } from 'react'
import axios from "axios";
import Select from 'react-select'

export class createPost extends Component {
    
    constructor() {
        super();
        this.state = {
            name: " ",
            code: " ",
            passmark: 0,
            lecture: " ",
            subjects: [],
            options: [],
            selectedSubjects: []
        }
        this.SubmitPressed = this.SubmitPressed.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubjectSelect = this.onSubjectSelect.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    SubmitPressed = (e) => {
        e.preventDefault();
        const Data = {
            name: this.state.name,
            code: this.state.code,
            passmark: this.state.passmark,
            lecture: this.state.lecture,
            subjects: this.state.selectedSubjects
           
        }
        console.log(Data);
        axios.post('http://localhost:8070/course/create', Data)
            .then(response => {
                alert('Data saved successfully');
            })
            .catch(e => {
                console.log(e);
                alert(e.message);
            })

    }
    componentDidMount(){
        axios.get('http://localhost:8070/subject/')
        .then(response => {
            this.setState({ subjects: response.data.data }, () => {
              let data = [];
              this.state.subjects.map((item, index) => {
                let subject = {
                  value: item._id,
                  label: item.name
                }
                data.push(subject)
              });
              this.setState({ options: data });
            })
          })
        };
    
        onSubjectSelect (e){
            this.setState({selectedSubjects: e ? e.map(item =>  item.value) : []});
        }
        
    render() {
        return (
            <div className= "container">
                <h1>Create subject</h1>
                <form onSubmit = {this.SubmitPressed}>
                        <div className="form-group">
                            <label htmlFor="name">Course Name</label>
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
                            <label htmlFor="code">code</label>
                            <textarea
                                className="form-control"
                                id="code"
                                name="code"
                                placeholder="Enter the code"
                                value={this.state.code}
                                style = {{width: '50dp'}}
                                onChange = {this.onChange}
                            />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="name">passmark</label>
                            <input type="number"
                                   className="form-control"
                                   id="passmarkt"
                                   name="passmark"
                                   placeholder="passmark"
                                   value={this.state.passmark}
                                   style={{width: '50dp'}}
                                    onChange = {this.onChange}
                            />
                        </div>
                    <br/>
                    <div className="form-group">
                            <label htmlFor="lecture">lecture</label>
                            <input
                            type ="text"
                                className="form-control"
                                id="lecture"
                                name="lecture"
                                placeholder="Enter the lecture"
                                value={this.state.lecture}
                                style = {{width: '50dp'}}
                                onChange = {this.onChange}
                            />
                        </div>
                        <br/>  
                        <Select
                            className="basic-multi-select"
                            onChange={this.onSubjectSelect}
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

export default createPost
