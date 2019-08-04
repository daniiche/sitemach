import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItem } from "../../actions/machines";

export class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        getItem: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getItem(this.props.match.params.machineId);
    }

    render() {
        return (
            <Fragment>
                <h2>Machine</h2>
                <table className="table table-striped">
                    <thead>
                     <tr>
                         <th>ID</th>
                         <th>Model</th>
                         <th>Kind</th>
                         <th>Brand</th>
                     </tr>
                    </thead>
                    <tbody>

                            <tr key={this.props.item.machineId}>
                                <td>{this.props.item.machineId}</td>
                                <td>{this.props.item.model}</td>
                                <td>{this.props.item.kind}</td>
                                <td>{this.props.item.brand}</td>
                            </tr>

                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item.item
});

export default connect(
    mapStateToProps,
    {getItem})
(Item);