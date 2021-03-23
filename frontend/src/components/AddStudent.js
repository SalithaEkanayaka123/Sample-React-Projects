import React,{useState} from 'react'
import { Form } from 'react-bootstrap';
import axios from "axios";

function AddStudent() {

  
  const [name, setName] = React.useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function SubmitPressed(e) {
    e.preventDefault();
    const newStudent = {
      name,
      age,
      gender
    }
    axios.post("http://localhost:8070/student/add", newStudent).then(() => {
      alert("Student added");
    }).catch((err) => {
      console.log(err);
    })
  }
    return (
        <div className= "container">
          <form onSubmit = {SubmitPressed}>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" 
                    id="name" placeholder="Enter the name" style = {{width: '50dp'}} 
                    onChange = {(e) =>{
                      setName(e.target.value);
                    }}

                    />
                  </div>
                  <br/>
                  <div className="form-group">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control" 
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

export default AddStudent
