import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios';

const Vehicle = props => (
    <tr>
        <td>{props.vehicle._id}</td>
        <td>{props.vehicle.code}</td>
        <td>{props.vehicle.model}</td>
        <td>{props.vehicle.type}</td>
        <td>{props.vehicle.name}</td>
        <td>
            {/*<Link to={"/EditVehicle/"+props.Vehicle._id}>edit</Link>*/}
        </td>
        <td>
            <Link to={"/update-vehicle/"+props.vehicle._id}>edit</Link>

        </td>
        <td>
            <a href="/display-vehicle" onClick={() => {
                props.deleteVehicle(props.vehicle._id)}}>delete</a>
        </td>
    </tr>
)

export class VehicleTable extends Component {
    constructor(props) {
        super(props);
        this.deleteVehicle = this.deleteVehicle.bind(this);
        this.state = {vehicle: []};
    }

    componentDidMount() {
        axios.get("http://localhost:8070/vehicle/")
            .then(response => {
                this.setState({vehicle: response.data.data});
            }).catch((err) => {
                console.log(err);
            })
    }
    ///:id
    deleteVehicle = (id)  => {
        axios.delete('http://localhost:8070/vehicle/delete/'+id)//check
            .then(res => console.log(res.data));
        this.setState({
            vehicle: this.state.vehicle.filter(el => el._id !== id)
        })
    }

    vehicleList = () => {
        return this.state.vehicle.map((item, index) => {
                return <Vehicle vehicle = {item} deleteVehicle = {this.deleteVehicle} key ={item._id}/>;
            }
        )
    }
    render() {
        return (
            <div>
                <h3>Vehicle Table</h3>
                <table className="table">
                    <thead className= "thead-light">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">code</th>
                        <th scope="col">model</th>
                        <th scope="col">type</th>
                        <th scope="col">name</th>
                        <th scope="col">Cattegories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.vehicleList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default VehicleTable
