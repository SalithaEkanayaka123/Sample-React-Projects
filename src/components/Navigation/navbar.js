import React, { Component } from 'react'
export class navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page"
                            href="/Home"
                            >Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/create-subject">Create Subject</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/create-course">Create Courses</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">Courses</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        </div>
        )
    }
}

export default navbar
