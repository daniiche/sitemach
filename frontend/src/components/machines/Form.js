import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addMachine } from "../../actions/machines";

export class Form extends Component {
    state = {
        machineId:"",
        model: "",
        kind: "",
        brand: ""
    };

    static propTypes = {
        addMachine: PropTypes.func.isRequired
    };

    onChange = e => this.setState({
        [e.target.model]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const { model, kind, brand, machineId } = this.state;
        const machine = { model, kind, brand, machineId };
        this.props.addMachine(machine);
    };

    render() {
        const { model, kind, brand, machineId } = this.state;
        return (
          <div className="card card-body mt-4 mb-4">
            <h2>Add Machine </h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Model</label>
                <input
                  className="form-control"
                  type="text"
                  name="model"
                  placeholder="Input model"
                  onChange={this.onChange}
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

export default connect(null, {addMachine})(Form);