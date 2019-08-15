import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItem } from "../../actions/machines";
import {Redirect} from "react-router";
import { Link } from 'react-router-dom';


export class Contact extends Component {
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
                        <li className="breadcrumb-item active" aria-current="page">Contact supplier</li>
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
                                <h2 >Contact supplier</h2>
                                <h5>of the {this.props.item.brand+" "+this.props.item.model}</h5>
                                <div className="card">
                                    <address>
                                        <br /><strong>Stankoinkom, Inc.</strong><br />
                                        40A Volgodonskaya St, Suite 900<br />
                                        Russia, Perm, 614109<br /><br />
                                        <strong>Phone</strong><br />
                                        <a title="Call +7-800-100-90-11" href="callto:+78001009011">+7-800-100-90-11</a><br /><br />
                                        <strong>Email</strong><br />
                                        <a title="Email to request@stankoinkom.ru" href="mailto:request@stankoinkom.ru">request@stankoinkom.ru</a><br /><br />
                                        <a title="Email with machine details inserted" className="btn btn-success" href={"mailto:request@stankoinkom.ru?body=This%20is%20a%20query%20on%20the%20QR%20"
                                        +this.props.item.brand+" "+this.props.item.model+"%0D%0Aid:%20"+this.props.item.machineId+"%0D%0Abought:%20"
                                        +this.props.item.purchased_date}>Write to the supplier</a>
                                    </address>
                                </div>
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
(Contact);