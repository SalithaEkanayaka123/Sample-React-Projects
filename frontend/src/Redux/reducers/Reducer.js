import {FETCH_STUDENTS, ADD_STUDENT} from "../actions/types";

const initialState = {
    StudentDetails: {
        records: [],
        record: {}
    }
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
        default:
            return state;
    }
}