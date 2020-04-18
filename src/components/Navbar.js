import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white py-0">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src="/assets/img/logo.png" alt="Corelant" />
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apply for loan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Company</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Forms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}
