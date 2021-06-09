import React, { Component } from 'react'
import axios from "axios";


export class course extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8070/course/')
            .then(response => {
            this.setState({ courses: response.data.data });
        })
    }
    render() {
        return (
            <div className="container">
            <h1>Courses</h1>
            {this.state.courses.length > 0 && this.state.courses.map((item, index) => (
              <div key={index} className="card mb-3">
                <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}> 
                  <h4>Course Name: {item.name}</h4>
                  <h5>Lecture: {item.lecture}</h5>
                  <h5>Code: {item.code}</h5>
                  <h6>Passmark: {item.passmark}</h6>
                </div>
              </div>
            ))}
          </div>
        )
    }
}

export default course