import React, {Component, Fragment} from "react";
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }
    componentDidUpdate(prevProps) {
        const {error, alert, message} = this.props;
        if (error !== prevProps.error) {
            if (error.msg.machineId) alert.error(`MachineId: ${error.msg.machineId.join()}`);
            if (error.msg.model) alert.error(`Model: ${error.msg.model.join()}`);
            if (error.msg.kind) alert.error(`Kind: ${error.msg.kind.join()}`);
            if (error.msg.brand) alert.error(`Brand: ${error.msg.brand.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.username) alert.error(error.msg.username.join());
        }
        if (message !== prevProps.message) {
            if (message.machineDeleted) alert.success(message.machineDeleted);
            if (message.machineAdded) alert.success(message.machineAdded);
            if (message.passwordNotMatch) alert.error(message.passwordNotMatch );
        }
    }

    render() {
        return (null);
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));