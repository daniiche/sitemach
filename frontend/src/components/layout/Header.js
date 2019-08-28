import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../actions/auth";

export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {

        const { isAuthenticated, user} = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav text-right ml-auto mt-lg-0">
                <span className="navbar-text font-weight-light">

                        {user ? `Welcome ${user.username}` : ""}

                </span>
                <li className="nav-item pl-4">
                    <button onClick={this.props.logout} className="nav-link btn btn-outline-danger btn-sm ml-auto">Logout</button>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav text-right ml-auto mt-lg-0">
                <li className="nav-item">
                    <Link to="/login/" className="nav-link font-weight-bold">Login</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" style={{fontSize: "1.6rem"}} ><strong>⚙️ Sitemach</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo01">
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>

                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Header);