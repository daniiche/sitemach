import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItem } from "../../actions/machines";
import { Link } from 'react-router-dom';
import ModalImage from "react-modal-image";

export class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        getItem: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getItem(this.props.match.params.machineId);
    }

    renderData(command) {

            const {
                machineId,
                model,
                kind,
                brand,
                manufactured_date,
                purchased_date,
                warranty_date,
                length,
                width,
                height,
                weight,
                image1,
                image2,
                image3,
                spec_file,
                sparts_file,
                cons_file,
                warranty_file,
                instruct_file,
                main_file
            } = this.props.item;

            if (command=='table'){
                let table = [<tr key="machineId"><td>Machine id</td><td>{machineId}</td></tr>];
                    if (model) table.push(<tr key="model"><td>Model</td><td>{model}</td></tr>)
                    if (kind) table.push(<tr key="kind"><td>Kind</td><td>{kind}</td></tr>)
                    if (brand) table.push(<tr key="brand"><td>Brand</td><td>{brand}</td></tr>)
                    if (manufactured_date) table.push(<tr key="manufactured_date"><td>Manufactured date</td><td>
                        {manufactured_date}</td></tr>)
                    if (purchased_date) table.push(<tr key="purchased_date"><td>Purchased date</td><td>
                        {purchased_date}</td></tr>)
                    if (warranty_date) table.push(<tr key="warranty_date"><td>Warranty expiry date</td><td>
                        {warranty_date}</td></tr>)
                    if (length) table.push(<tr key="length"><td>Length</td><td>{length} mm</td></tr>)
                    if (width) table.push(<tr key="width"><td>Width</td><td>{width} mm</td></tr>)
                    if (height) table.push(<tr key="height"><td>Height</td><td>{height} mm</td></tr>)
                    if (weight) table.push(<tr key="weight"><td>Weight</td><td>{weight} kg</td></tr>)
                    if (spec_file) table.push(<tr key="spec_file"><td>Specifications</td><td><a
                        title="Download the document" href={spec_file} target="_blank">{spec_file.substring(43)}</a></td></tr>)
                    if (sparts_file) table.push(<tr key="sparts_file"><td>Spare parts</td><td><a
                        title="Download the document" href={sparts_file} target="_blank">{sparts_file.substring(43)}</a></td></tr>)
                    if (cons_file) table.push(<tr key="cons_file"><td>Consumables</td><td><a
                        title="Download the document" href={cons_file} target="_blank">{cons_file.substring(43)}</a></td></tr>)
                    if (warranty_file) table.push(<tr key="warranty_file"><td>Warranty details</td><td><a
                        title="Download the document" href={warranty_file} target="_blank">{warranty_file.substring(43)}</a></td></tr>)
                    if (instruct_file) table.push(<tr key="instruct_file"><td>Instructions</td><td><a
                        title="Download the document" href={instruct_file} target="_blank">{instruct_file.substring(43)}</a></td></tr>)
                    if (main_file) table.push(<tr key="main_file"><td>Maintenance details</td><td><a
                        title="Download the document" href={main_file} target="_blank">{main_file.substring(43)}</a></td></tr>)
                return table
            }
            if (command=='head'){
                return kind+" "+brand+" "+ model
            }
            if (command=='images'){
                let images =[];
                    if (image1) images.push(<div key="image1" className=" mr-2 ml-2 col-3"><ModalImage className="img-fluid rounded" medium={image1} small={image1}/></div>)
                    if (image2) images.push(<div key="image2" className=" mr-2 ml-2 col-3"><ModalImage className="img-fluid rounded" medium={image2} small={image2}/></div>)
                    if (image3) images.push(<div key="image3" className=" mr-2 ml-2 col-3"><ModalImage className="img-fluid rounded" medium={image3} small={image3}/></div>)
                return images
            }
    }

    render() {

        const {isAuthenticated} = this.props.auth;
        const breadcrumbs = (
            <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Machines list</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.renderData('head')}</li>
                    </ol>
            </nav>
        );

        const bottomButtons = (
            <div className="row justify-content-center align-items-center">
                        <Link title="Open QR code page of the machine" className="btn btn-success mr-3 ml-3 col-lg-4 col-sm-3 col-xs-2" to={"/item/"+this.props.match.params.machineId+"/qr/"}>Get QR code of the machine</Link>
                        <Link title="Contact supplier of the machine" className="btn btn-warning ml-3 mr-3 col-lg-4 col-sm-3 col-xs-2" to={"/item/"+this.props.match.params.machineId+"/contact/"}>Contact supplier on this</Link>
            </div>
        );

        return (
            <Fragment>
                <div>
                    {isAuthenticated ? breadcrumbs : null}
                </div>
                <div className="text-center">
                    <h2>{this.renderData('head')}</h2>
                </div>
                <div className="row justify-content-center align-items-center mb-2">
                    {this.renderData('images')}
                </div>
                <div>
                    <table className="table table-hover table-responsive-sm">
                        <tbody>
                            {this.renderData('table')}
                        </tbody>
                    </table>
                </div>
                {isAuthenticated ? bottomButtons : null}
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
(Item);