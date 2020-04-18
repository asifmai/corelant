import React, { Component } from 'react'
import ServiceCard from './ServiceCard'

export default class ServicesSection extends Component {
  render() {
    return (
      <section className="third-section equal-distance">
          <img src="/assets/img/Group780.png" alt="" className="left-background"/>
          <img src="/assets/img/Group824.png" alt="" className="right-background"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto text-center">
                        <h3 className="third-section-heading mb-4">What we are provising</h3>
                        <p className="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been
                        </p>
                        <p className="text">
                            the industry's standard dummy text ever since
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {this.props.services.map(s => (
                        <ServiceCard title={s.title} image={s.image} body={s.body}/>
                    ))}
                </div>
            </div>
        </section>
    )
  }
}
