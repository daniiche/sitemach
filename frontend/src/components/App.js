import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Dashboard from "./machines/Dashboard";
import Item from "./machines/Item";
import Qrcode from "./machines/Qrcode";
import Contact from "./machines/Contact";
import Alerts from "./layout/Alerts";
import Login from "./accounts/Login";
import PrivateRoute from "./common/PrivateRoute";

import { Provider } from "react-redux";
import store from "../store";
import {loadUser } from "../actions/auth";

//Alert options
const alertOptions = {
    timeout: 3000,
    position: "top center",
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                    <Header />
                    <Alerts />
                    <div className="container mt-2">
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/item/:machineId" component={Item} />
                            <Route exact path="/item/" render={() => <Redirect to="/" />} />
                            <PrivateRoute exact path="/item/:machineId/qr" component={Qrcode} />
                            <PrivateRoute exact path="/item/:machineId/contact" component={Contact} />
                        </Switch>
                    </div>
                        <Footer />
                    </Router>
                </AlertProvider>
            </Provider>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("app")
);
