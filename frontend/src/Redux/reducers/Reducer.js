import {FETCH_STUDENTS, ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT} from "../actions/types";

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
        case DELETE_STUDENT:
            console.log('reducer');
            return {
                ...state,
                StudentDetails: {
                    ...state.StudentDetails,
                    record: state.StudentDetails.records.filter(item => item !== action.payload)
                }
            }

        /**
         * case DELETE_POST:
         return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
    };
         */
        case UPDATE_STUDENT:

        default:
            return state;
    }
}