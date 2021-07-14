import {FETCH_STUDENTS, ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, GET_STUDENT} from "./types";
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

export const deleteStudents = (id) => dispatch => {
    console.log('creating');
    axios.delete(URL.baseURL + 'student/delete/'+ id)
        .then(response => {
                dispatch({
                    type: DELETE_STUDENT,
                    payload: id
                })
                alert("data deleted sucessfully");
            }

        ).catch((err) => {
        console.log(err);
    })
}

export const getStudentByID = (data) => dispatch => {
    // axios.get(URL.baseURL + 'student/get/'+ id)
    //     .then(response => {
    //
    //         }
    //
    //     ).catch((err) => {
    //     console.log(err);
    // })
    dispatch({
        type: GET_STUDENT,
        payload: data
    })
}

export const upDateStudent = (PostData, id) => dispatch => {
    axios.put(URL.baseURL + 'student/update/' + id , PostData)
        .then(response => {
                dispatch({
                    type: UPDATE_STUDENT,
                    payload: response.data
                })
                alert("data updated successfully");
            }

        ).catch((err) => {
        console.log(err);
    })
}
