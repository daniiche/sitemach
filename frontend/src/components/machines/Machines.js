import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMachines, deleteMachine } from "../../actions/machines";

export class Machines extends Component {
    static propTypes = {
        machines: PropTypes.array.isRequired,
        getMachines: PropTypes.func.isRequired,
        deleteMachine: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getMachines();
    }

    render() {
        return (
            <Fragment>
                <h2>Machines List</h2>
                <table className="table table-striped">
                    <thead>
                     <tr>
                         <th>ID</th>
                         <th>Model</th>
                         <th>Kind</th>
                         <th>Brand</th>
                        <th />
                     </tr>
                    </thead>
                    <tbody>
                        {this.props.machines.map(machine => (
                            <tr key={machine.machineId}>
                                <td>{machine.machineId}</td>
                                <td>{machine.model}</td>
                                <td>{machine.kind}</td>
                                <td>{machine.brand}</td>
                                <td><button onClick={this.props.deleteMachine.bind(this, machine.machineId)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    machines: state.machines.machines
});

export default connect(
    mapStateToProps,
    { getMachines, deleteMachine })
(Machines);