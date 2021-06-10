import React, { Component } from 'react'
import axios from 'axios';

export class Subjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            totalAmount: ''
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:8070/course/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data);
                console.log(response.data.subjects.subjects);
                this.setState({ subjects: response.data.subjects.subjects })
            })
            .catch(error => {
                alert(error.message)
            })
            axios.get(`http://localhost:8070/course/amount/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data.total);
            this.setState({ totalAmount: response.data.total })
            })
            .catch(error => {

                alert(error.message)
            })
    }

    render() {
        return (
            <div>
                 <h1>Course Subjects</h1>
                <h3>Total Amount: {this.state.totalAmount}</h3>
                {this.state.subjects.length >= 0 && this.state.subjects.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h4>Subject Name: {item.name}</h4>
                            <h5>Description: {item.description}</h5>
                            <h5>Amount: {item.amount}</h5>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Subjects
