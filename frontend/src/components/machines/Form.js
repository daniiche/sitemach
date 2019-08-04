import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMachine } from "../../actions/machines";
import {Link} from "react-router-dom";

export class Form extends Component {
    state = {
        model: "",
        kind: "",
        brand: "",
        machineId: ""
    };

    static propTypes = {
        addMachine: PropTypes.func.isRequired
    };

    onChange = e => this.setState({
        [e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const { model, kind, brand, machineId } = this.state;
        const machine = { model, kind, brand, machineId };
        this.props.addMachine(machine);
        this.setState({
            model: "",
            kind: "",
            brand: "",
            machineId: ""
        });
    };

    render() {
        const { model, kind, brand, machineId } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
            <h2>Add Machine</h2>
                <Link to="/item/2/" className="nav-link">Item</Link>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Model</label>
                <input
                  className="form-control"
                  type="text"
                  name="model"
                  placeholder="Input model"
                  onChange={this.onChange}
                  value={model}
                />
              </div>
              <div className="form-group">
                <label>Kind</label>
                <input
                  className="form-control"
                  type="text"
                  name="kind"
                  placeholder="Input kind"
                  onChange={this.onChange}
                  value={kind}
                />
              </div>
              <div className="form-group">
                <label>Brand</label>
                <input
                  className="form-control"
                  type="text"
                  name="brand"
                  placeholder="Input brand"
                  onChange={this.onChange}
                  value={brand}
                />
              </div>
                <div className="form-group">
                <label>machineId</label>
                <input
                  className="form-control"
                  type="text"
                  name="machineId"
                  placeholder="Input machineId"
                  onChange={this.onChange}
                  value={machineId}
                />
                </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
    }
}

export default connect(null, { addMachine })(Form);