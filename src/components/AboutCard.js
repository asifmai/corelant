import React, { Component } from 'react'

export default class AboutCard extends Component {
  render() {
    return (
      <div className="col-sm-6 text-center text-sm-left">
          <img className="pic-height mb-3" src={this.props.image} alt="" />
          <h5 className="first-section-heading">{this.props.title}</h5>
          <p className="text mb-5">{this.props.body}</p>
      </div>
    )
  }
}
