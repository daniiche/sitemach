import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class Footer extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    render() {

        return (

            <footer className="footer py-4 bg-dark text-white-50 mt-5 sticky-bottom">
                <div className="container text-center">
                    <small>Copyright &copy; Daniil Chbunin , 2019</small>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Footer);