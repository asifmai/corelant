import React, { Component } from 'react'

export default class SubscribeSection extends Component {
  render() {
    return (
      <section className="fifth-section equal-distance">
      <div className="container">
          <div className="row">
              <div className="col-md-5 m-auto text-center">
                  <h3 className="fifth-heading">Subscribe our newsletter </h3>
                  <p className="text">
                      Lorem ipsum, or lapsum as it is sometimes known
                      is dummy text used in laying out print
                  </p>
              </div>
          </div>
          <div className="row">
              <div className="col-md-5 m-auto text-center">
                  <div className="email-button">
                      <input className="input-section" type="text" placeholder="Your email" />
                      <button className="same-button2">Subscribe</button>
                  </div>
              </div>
          </div>
      </div>
  </section>
    )
  }
}
