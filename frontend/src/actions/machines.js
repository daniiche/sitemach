import axios from "axios";

import { GET_MACHINES, DELETE_MACHINE, ADD_MACHINE } from "./types";

// Get machines
export const getMachines = () => dispatch => {
    axios
        .get("/api/machines/")
        .then(res => {
            dispatch({
                type: GET_MACHINES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// Delete machine
export const deleteMachine = machineId => dispatch => {
    axios
        .delete(`/api/machines/${machineId}/`)
        .then(res => {
            dispatch({
                type: DELETE_MACHINE,
                payload: machineId
            });
        })
        .catch(err => console.log(err));
};

// Add machine
export const addMachine = (machine) => dispatch => {
    axios
        .post("/api/machines/", machine)
        .then(res => {
            dispatch({
                type: ADD_MACHINE,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};