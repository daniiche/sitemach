import React, { Fragment } from "react";
import Form from "./Form";
import Machines from "./Machines";

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Machines />
        </Fragment>
    );
}