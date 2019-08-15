import axios from "axios";
import {returnErrors} from "./messages";

import {GET_MACHINES, GET_ITEM} from "./types";
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