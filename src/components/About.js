import React, { Component } from 'react'
import AboutCard from './AboutCard'

export default class About extends Component {
  render() {
    return (
      <section className="first-section equal-distance">
          <img src="/assets/img/Group717.png" alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="hero-heading text-dark">We are providing</h2>
                        <h2 className="hero-heading text-dark mb-4">Real state loan</h2>
                        <p className="text">
                            Applied Polymerics is a specialty infrastructure maintenance contractor for concrete,
                            bridge, highway, water treatment and geotechnical applications.
                        </p>
                        <p className="text mb-5">
                            Applied Polymerics was established in 1994 and during the last two decades has grown to
                            become renowned for its innovative engineering solutions delivered in a safe, cost-effective
                            and sustainable manner.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            {this.props.about.map((a) => (
                                <AboutCard title={a.title} image={a.image} body={a.body}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
