import React, { Component } from 'react'

export default class NewsSlide extends Component {
  render() {
    return (
      <div className="card text-white">
          <img className="card-img" src={this.props.image} alt={this.props.text} />
          <div className="card-img-overlay">
              <button className="small-button">{this.props.date}</button>
              <div className="gradient">
                  <p className="card-text">{this.props.text}</p>
              </div>
          </div>
      </div>
    )
  }
}
