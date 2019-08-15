import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItem } from "../../actions/machines";
import {Redirect} from "react-router";
import {Link} from 'react-router-dom';
import ModalImage from "react-modal-image";

export class Qrcode extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        getItem: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getItem(this.props.match.params.machineId);
    }

    render() {

        const {isAuthenticated} = this.props.auth;

        if (isAuthenticated == false) {
            return <Redirect to="/" />;
        }

        const breadcrumbs = (
            <nav aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Machines list</Link></li>
                        <li className="breadcrumb-item"><Link to={"/item/"+this.props.item.machineId+"/"}>{this.props.item.kind+" "+this.props.item.brand+" "+this.props.item.model}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">QR code</li>
                    </ol>
            </nav>
        );

        return (
                <Fragment>
                    <div>
                        {isAuthenticated ? breadcrumbs : null}
                    </div>
                    <div className="text-center">
                            <Fragment key={this.props.item.machineId}>
                                <h2>QR code of the {"\n"} <strong>{this.props.item.brand+" "+this.props.item.model}</strong></h2><br />
                                <ModalImage className="img-fluid rounded" medium={this.props.item.qrcode_png} small={this.props.item.qrcode_small}/><br />
                                <a  title="Send an email with code link inserted" className="btn btn-success"
                                      href={"mailto:?body=This%20is%20a%20link%20to%20the%20QR%20code%20image%20of%20the%20"
                                      +this.props.item.brand+" "+this.props.item.model+"%0D%0A"+this.props.item.qrcode_png}>
                                    Send image on email</a>
                            </Fragment>
                    </div>
                </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    item: state.item.item,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {getItem})
(Qrcode);