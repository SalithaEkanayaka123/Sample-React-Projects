import {FETCH_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT, GET_STUDENT} from "../actions/types";

const initialState = {
    StudentDetails: {
        records: [],
        record: {}
    },
    editDetail: []
}

export default function (state = initialState, action){
    switch (action.type) {
        case FETCH_STUDENTS:
            return {
                ...state,
                StudentDetails: {
                    ...state.StudentDetails,
                    records: action.payload
                }
            }
        case ADD_STUDENT:
            console.log('reducer');
            return {
                ...state,
                StudentDetails: {
                    ...state.StudentDetails,
                    record: action.payload
                }
            }
        case DELETE_STUDENT:
            console.log('reducer');
            return {
                ...state,
                StudentDetails: {
                    ...state.StudentDetails,
                    record: state.StudentDetails.records.filter(item => item !== action.payload)
                }
            }
        case GET_STUDENT:
            return {
                ...state,
                editDetail: action.payload
            }

        case UPDATE_STUDENT:
            return {
                ...state,
                StudentDetails: {
                    ...state.StudentDetails,
                    record: action.payload
                }
            }
        default:
            return state;
    }
}