import { GET_MACHINES, LOGOUT_SUCCESS} from '../actions/types.js';

const initialState = {
    machines: []
};

export default function (state = initialState, action) {
    switch (action.type) {
       case GET_MACHINES:
            return {
                ...state,
                machines: action.payload
            };
        case LOGOUT_SUCCESS:
            return {
            ...state,
            machines: [ ]
            };
        default:
            return state;
    };
};