import React, {Component, useEffect, useState} from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {fetchStudents} from "../Redux/actions/studentAction";

// const Student = props =>(
//     <tr>
//         <td>{props.student._id}</td>
//         <td>{props.student.name}</td>
//         <td>{props.student.age}</td>
//         <td>{props.student.gender}</td>
//         <td>
//             <Link to={"/edit/"+props.student._id}>edit</Link> | <a href="/DisplayStudent" onClick={() => {
//             props.deleteStudent(props.student._id)}}>delete</a>
//         </td>
//     </tr>
// )
function DisplayStudent(){

    const[student, setStudent] = useState([]);

    const dispatch = useDispatch();
    const response = useSelector((state) => state.details.StudentDetails.records);
    console.log(response);
    // constructor(props) {
    //     super(props);
    //     this.state = {student: []};
    //
    // }

    //http://localhost:8070/student

    useEffect(() => {
        dispatch(fetchStudents())
    },[])
    // componentDidMount() {
    //     axios.get("http://localhost:8070/student/").then(response => {
    //         this.setState({student: response.data});
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }
    ///:id
    // deleteStudent(id) {
    //     console.log("i:" +id);
    //     document.write("i:" +id)
    //     axios.delete('http://localhost:8070/student/delete/'+id)
    //         .then(res => console.log(res.data));
    //     this.setState({
    //         student: this.state.student.filter(el => el._id !== id)
    //     })
    // }

    const studentList = () => {
        // return this.state.student.map(currentstudent => {
        //     return <Student student = {currentstudent} deleteStudent = {this.deleteStudent} key ={currentstudent._id}/>;
        // })
    }
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
                    {/*{this.studentList()}*/}
                    </tbody>
                </table>
            </div>
        )
}

export default DisplayStudent
