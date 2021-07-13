import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getStudentByID} from "../Redux/actions/studentAction";


function UpdateStudent(props) {
    console.log(props.match.params.id)
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState("");
    const dispatch = useDispatch();
    const response = useSelector((state) => state.details.editDetail);
    console.log(response.student);
    function SubmitPressed(e) {
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender
        }
        console.log(newStudent);
       // dispatch(addStudents(newStudent));
    }
    return (
        <div className= "container">
            <form onSubmit = {SubmitPressed}>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control"
                           id="name" placeholder="Enter the name" style = {{width: '50dp'}}
                           defaultValue={response.student.name}
                           onChange = {(e) =>{
                               setName(e.target.value);
                           }}

                    />
                </div>
                <br/>
                <div className="form-group">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control"
                           defaultValue={response.student.age}
                           id="age" placeholder="Enter the age" style = {{width: '50dp'}}
                           onChange = {(e) =>{
                               setAge(e.target.value);
                           }}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <label for="gender">Student Gender</label>
                    <input type="text" className="form-control"
                           defaultValue={response.student.gender}
                           id="gender" placeholder="Enter the Gender" style = {{width: '50dp'}}
                           onChange = {(e) =>{
                               setGender(e.target.value);
                           }}
                    />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default UpdateStudent
