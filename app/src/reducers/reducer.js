// reducer must exist if it is in index.js and all that.
import { FETCH_NASA_START, FETCH_NASA_SUCCESS, FETCH_NASA_FAIL } from '../actions.js/index';



const initialState = {
    nasa: '',
    isFetching: false,
    error: 'This is an error in reducer...'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_NASA_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }

        case FETCH_NASA_SUCCESS:
            return {
                ...state,
                nasa: action.payload,
                error: ''
            }

        case FETCH_NASA_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
};

export default reducer;


