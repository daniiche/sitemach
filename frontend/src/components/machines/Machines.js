import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMachines} from "../../actions/machines";
import {Link} from "react-router-dom";

export class Machines extends Component {
    static propTypes = {
        machines: PropTypes.array.isRequired,
        getMachines: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getMachines();
    }

    render() {
        return (
            <Fragment>
                <h2 className="text-center">Machines List</h2>
                <table className="table table-striped table-hover table-responsive-sm">
                    <tbody>
                        {this.props.machines.map(machine => (
                            <tr key={machine.machineId}>
                                <td className="text-right align-middle"><Link title={"Open "+machine.kind+" "+machine.brand+" "+machine.model+"page"} to={'/item/'+machine.machineId+'/'}><img className="img-fluid rounded" style={{maxHeight: "40px"}} src={machine.image1}/></Link></td>
                                <td className="align-middle"><strong><Link title="Open machine page" to={'/item/'+machine.machineId+'/'} >{machine.kind+" "+machine.brand+" "+machine.model}</Link></strong></td>
                                <td className="align-middle"><Link className="btn btn-success" title={"QR code for "+machine.kind+" "+machine.brand+" "+machine.model} style={{fontSize: "0.7rem"}} to={"/item/"+machine.machineId+"/qr/"}>QR code</Link></td>
                                <td className="align-middle"><Link className="btn btn-warning" title={"Contact supplier on "+machine.kind+" "+machine.brand+" "+machine.model} style={{fontSize: "0.7rem"}} to={"/item/"+machine.machineId+"/contact/"}>Contact</Link></td>
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
    { getMachines })
(Machines);