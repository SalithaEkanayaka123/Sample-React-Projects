import {FETCH_STUDENTS, ADD_STUDENT} from "./types";
import axios from "axios";
import URL from '../URL'
export const fetchStudents = () => dispatch => {
    console.log('fetching');
    console.log(URL.baseURL);
    axios.get(URL.baseURL + 'student/')
        .then(response => {
            dispatch({
                   type: FETCH_STUDENTS,
                   payload: response.data
          })}
        ).catch((err) => {
            console.log(err);
    })
}

export const addStudents = (PostData) => dispatch => {
    console.log('creating');
    axios.post(URL.baseURL + 'student/add', PostData)
        .then(response => {
            dispatch({
                type: ADD_STUDENT,
                payload: response.data
            })
                alert("data added successfully");
        }

        ).catch((err) => {
        console.log(err);
    })
}