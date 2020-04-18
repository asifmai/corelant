import React, { Component } from 'react'

export default class TestimonialSlide extends Component {
  render() {
    const activeClass = `carousel-item ${this.props.active}`
    return (
      <div className={activeClass}>
        <div className="middle">
            <img className="img-fluid mt-4" src={this.props.image} alt="" />
            <h5 className="name mt-2">{this.props.name}</h5>
            <div className="profession mb-3">{this.props.title}</div>
            <p className="text">{this.props.body}</p>
        </div>
      </div>
    )
  }
}
