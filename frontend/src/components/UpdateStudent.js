import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchStudents, getStudentByID, upDateStudent} from "../Redux/actions/studentAction";
import {useHistory} from "react-router-dom";


function UpdateStudent(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState("");
    const dispatch = useDispatch();
    const response = useSelector((state) => state.details.editDetail);
    console.log(response);
    const history = useHistory();

    useEffect(() => {
        setName(response.name)
        setAge(response.age)
        setGender(response.gender)
    },[response])
    const SubmitPressed = (e) => {
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender
        }
        console.log(newStudent);
       dispatch(upDateStudent(newStudent, response._id));
        history.push('/DisplayStudent');
    }
    return (
        <div className= "container">
            <form onSubmit = {SubmitPressed}>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control"
                           id="name" placeholder="Enter the name" style = {{width: '50dp'}}
                           value={name}
                           onChange = {(e) =>{
                               setName(e.target.value);
                           }}

                    />
                </div>
                <br/>
                <div className="form-group">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control"
                           value={age}
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
                           value={gender}
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
