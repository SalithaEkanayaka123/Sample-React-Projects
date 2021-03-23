import React from 'react'
import axios from "axios";

function DisplayStudent() {

    

    return (
        <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colspan="1">Larry the Bird</td>
                <td>Thornton</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default DisplayStudent
