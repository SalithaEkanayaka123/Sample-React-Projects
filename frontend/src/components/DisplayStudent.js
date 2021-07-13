import React, {Component, useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteStudents, fetchStudents, getStudentByID} from "../Redux/actions/studentAction";
import {Button} from "react-bootstrap";

const Student = props =>(
    <tr>
        <td>{props.student._id}</td>
        <td>{props.student.name}</td>
        <td>{props.student.age}</td>
        <td>{props.student.gender}</td>
        <td>
            <Button onClick={() => props.MoveUpdateStudent(props.student._id)} >edit</Button> | <a href="/DisplayStudent" onClick={() => {
            props.deleteStudent(props.student._id)}}>delete</a>
        </td>
    </tr>
)


function DisplayStudent(){
    const history = useHistory();
    const dispatch = useDispatch();
    const response = useSelector((state) => state.details.StudentDetails.records);


    useEffect(() => {
        dispatch(fetchStudents())
    },[])

    const deleteStudent = (id) => {
        dispatch(deleteStudents(id))
    }

    const MoveUpdateStudent = (id) => {
        console.log(id)
        dispatch(getStudentByID(id))
        history.push('/UpdateStudent/' + id);
    }


    const studentList = () => {
        return response.map(currentstudent => {
            return <Student student = {currentstudent} deleteStudent = {deleteStudent} key ={currentstudent._id} MoveUpdateStudent={MoveUpdateStudent}/>;
        })
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
                    {studentList()}
                    </tbody>
                </table>
            </div>
        )
}


export default DisplayStudent
