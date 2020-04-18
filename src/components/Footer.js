import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-5 text-center text-md-left">
                    <img className="footer-img" src="/assets/img/logo.png" style={{height: '70px'}} alt="Corelant" />
                    <div className="text mt-4">
                        <p className="text pr-0 mr-0 pr-md-5 mr-md-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make
                        </p>
                    </div>
                    <div className="social-icons mt-5">
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin-in mx-4"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-google mx-4"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-4 text-center text-md-left mt-4 mt-md-0">
                    <div className="middle">
                        <h4 className="footer-heading">Corporate Office</h4>
                        <div className="address my-4">
                            <div className="add">CORELANT, 6853 Olive Blvd</div>
                            <div className="add">Saint Louis, MO - 63130</div>
                        </div>
                        <div className="contact">
                            <div className="cont">Phone : 314 488 2993</div>
                            <div className="cont">Email : inspections@corelant.com</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center text-md-right mt-4 mt-md-0">
                    <div className="left-side">
                        <h4 className="footer-heading">Explore</h4>
                        <div className="links">
                            <a className="" href="#">Home</a>
                            <a className="" href="#">About</a>
                            <a className="" href="#">Services</a>
                            <a className="" href="#">Downloads</a>
                            <a className="" href="#">News</a>
                            <a className="" href="#">Jobs</a>
                            <a className="" href="#">Contact</a>
                        </div>
                    </div>

                </div>
                </div>
        </div>
        <div className="corelant text-center">© 2020 CORELANT All rights reserved.</div>

      </footer>
    )
  }
}
