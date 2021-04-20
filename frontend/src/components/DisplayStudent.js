import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

const Student = props =>(
    <tr>
        <td>{props.student._id}</td>
        <td>{props.student.name}</td>
        <td>{props.student.age}</td>
        <td>{props.student.gender}</td>
        <td>
            <Link to={"/edit/"+props.student._id}>edit</Link> | <a href="/DisplayStudent" onClick={() => {
            props.deleteStudent(props.student._id)}}>delete</a>
        </td>
    </tr>
)
export class DisplayStudent extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.state = {student: []};

    }

    //http://localhost:8070/student
    componentDidMount() {
        axios.get("http://localhost:8070/student/").then(response => {
            this.setState({student: response.data});
        }).catch((err) => {
            console.log(err);
        })
    }
    ///:id
    deleteStudent(id) {
        console.log("i:" +id);
        document.write("i:" +id)
        axios.delete('http://localhost:8070/student/delete/'+id)
            .then(res => console.log(res.data));
        this.setState({
            student: this.state.student.filter(el => el._id !== id)
        })
    }

    studentList(){
        return this.state.student.map(currentstudent => {
            return <Student student = {currentstudent} deleteStudent = {this.deleteStudent} key ={currentstudent._id}/>;
        })
    }
    render() {
        return (
            <div>
                <h3>Student Table</h3>
                <table className="table">
                    <thead className= "thead-light">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">age</th>
                        <th scope="col">gender</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.studentList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayStudent
