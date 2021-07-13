import React, {Component, useEffect, useState} from 'react'
import {  Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteStudents, fetchStudents} from "../Redux/actions/studentAction";

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
function DisplayStudent(){

    const dispatch = useDispatch();
    const response = useSelector((state) => state.details.StudentDetails.records);


    useEffect(() => {
        dispatch(fetchStudents())
    },[])

    const deleteStudent = (id) => {
        dispatch(deleteStudents(id))
    }



    const studentList = () => {
        return response.map(currentstudent => {
            return <Student student = {currentstudent} deleteStudent = {deleteStudent} key ={currentstudent._id}/>;
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
