import axios from "axios";
import {createMessage, returnErrors} from "./messages";

import {GET_MACHINES, DELETE_MACHINE, ADD_MACHINE, GET_ITEM} from "./types";
import { tokenConfig } from "./auth";

// Get machines
export const getMachines = () => (dispatch, getState) => {
    axios
        .get("/api/machines/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_MACHINES,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data,
            err.response.status))
        );
};

// Get a single machine
export const getItem = machineId => (dispatch) => {
    axios
        .get(`/api/item/${machineId}/`)
        .then(res => {
            dispatch({
                type: GET_ITEM,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data,
            err.response.status))
        );
};

// Delete machine
export const deleteMachine = machineId => (dispatch, getState) => {
    axios
        .delete(`/api/machines/${machineId}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({machineDeleted: "Machine deleted"}));
            dispatch({
                type: DELETE_MACHINE,
                payload: machineId
            });
        })
        .catch(err => console.log(err));
};

// Add machine
export const addMachine = (machine) => (dispatch, getState) => {
    axios
        .post("/api/machines/", machine, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({machineAdded: "Machine added"}));
            dispatch({
                type: ADD_MACHINE,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};