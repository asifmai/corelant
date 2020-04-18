import React, { Component } from 'react'

export default class ServiceCard extends Component {
  render() {
    return (
      <div className="col-md-3 mt-5 h-100">
        <div className="card-style h-100">
            <img className="pic-height mb-4" src={this.props.image} alt="" />
            <h5 className="third-section-heading mb-3">{this.props.title}</h5>
            <p className="text mb-4">{this.props.body}</p>
            <img src="/assets/img/Path 1031.png" alt="" />
        </div>
      </div>
    )
  }
}
