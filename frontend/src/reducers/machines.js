import { GET_MACHINES, DELETE_MACHINE, ADD_MACHINE,LOGOUT_SUCCESS} from '../actions/types.js';

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
        case DELETE_MACHINE:
            return {
                ...state,
                machines: state.machines.filter(machine => machine.machineId !==
                action.payload)
            };
        case ADD_MACHINE:
            return{
                ...state,
                machines: [...state.machines, action.payload]
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